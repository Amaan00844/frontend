import { v4 as uuidv4 } from 'uuid'
import  sendEmail  from '../utils/mailer.js' // Import the sendEmail function

import { database, push, ref, get } from '../database/db.config.js'

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("ID and password are required!");
        }
        if (password.length < 6) {
            return res.status(400).json("Password must be at least 6 characters long");
        }
        const userRef = ref(database, "/members");
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
            const users = snapshot.val();
            const userExists = Object.values(users).some(user => user.email === email && user.password === password);

            if (userExists) {
                return res.status(400).json("User already exists with the same ID and password!");
            }
        }
        const user = { email, password };
        const newUserRef = push(userRef, user);

        console.log("New user registered with key:", newUserRef.key);

        return res.status(200).json("Registration successful!");

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json("Internal server error");
    }
};
const adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }
        const userref = ref(database, "/members");
        const snapshot = await get(userref);
        if (!snapshot.exists()) {
            return res.status(404).json({ message: "No users found" });
        }
        const users = snapshot.val();
        const user = Object.values(users).find(user => user.email === email);
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid  password!" });
        }
        return res.status(200).json({ message: "Login successful!", user });

    } catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
// const student_register = async (req, res) => {
//     try {
//         const { name, email, password, address } = req.body;
//         if (!name || !email || !password || !address) {
//             return res.status(400).json("Name, email, password, and address are required!");
//         }
//         if (password.length < 6) {
//             return res.status(400).json("Password must be at least 6 characters long");
//         }
//         const userRef = ref(database, "/student");
//         const snapshot = await get(userRef);
//         if (snapshot.exists()) {
//             const users = snapshot.val();
//             const userExists = Object.values(users).some(user => user.email === email);

//             if (userExists) {
//                 return res.status(400).json("User already exists!");
//             }
//         }
//         const id = uuidv4();
//         const user = { id, name, email, password, address };
//         const newUserRef = push(userRef, user);

//         console.log("New user registered with key:", newUserRef.key);
//         return res.status(200).json({
//             message: "Registration successful!",
//             userId: id,
//         });

//     } catch (error) {
//         console.error("Error during registration:", error);
//         return res.status(500).json("Internal server error");
//     }
// };



const registerParticipant = async (req, res) => {
    try {
        const { eventId } = req.params; // Event ID from the URL
        const { name, email, address } = req.body;

        // Validate required fields
        if (!name || !email || !address) {
            return res.status(400).json({ message: "Name, email, and address are required!" });
        }

        // Reference to the event's participants in the database
        const participantsRef = ref(database, `/events/${eventId}/participants`);
        const snapshot = await get(participantsRef);

        // Check if the participant already exists
        if (snapshot.exists()) {
            const participants = snapshot.val();
            const participantExists = Object.values(participants).some(
                (participant) => participant.email === email
            );

            if (participantExists) {
                return res.status(409).json({ message: "Participant with this email is already registered for the event." });
            }
        }

        // Generate a unique number for the participant
        const uniqueNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit unique number

        // Create a new participant
        const participant = { id: uuidv4(), name, email, address, uniqueNumber };
        const newParticipantRef = push(participantsRef, participant);

        console.log("New participant registered with key:", newParticipantRef.key);

        // Send email with the unique number
        const emailSubject = "Your Event Registration Confirmation";
        const emailText = `Hello ${name},\n\nThank you for registering for the event. Your unique number is: ${uniqueNumber}.\n\nSee you there!`;
        await sendEmail(email, emailSubject, emailText);

        return res.status(200).json({
            message: "Registration successful! Check your email for your unique number.",
            participant,
        });

    } catch (error) {
        console.error("Error during participant registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
// const list_register = async (req, res) => {
//     try {

//         const userRef = ref(database, "/student");
//         const snapshot = await get(userRef);
//         if (!snapshot.exists()) {
//             return res.status(404).json("No students found!");
//         }
//         const students = snapshot.val();
//         const studentIds = Object.values(students).map(student => student.id);
//         return res.status(200).json(studentIds);

//     } catch (error) {
//         console.error("Error fetching student list:", error);
//         return res.status(500).json("Internal server error");
//     }
// };


const getParticipants = async (req, res) => {
    try {
        const { eventId } = req.params;

        const participantsRef = ref(database, `/events/${eventId}/participants`);
        const snapshot = await get(participantsRef);

        if (!snapshot.exists()) {
            return res.status(404).json("No participants found for this event.");
        }

        const participants = snapshot.val();
        const filteredParticipants = Object.values(participants).map(({ name, email }) => ({ name, email }));

        return res.status(200).json(filteredParticipants);

    } catch (error) {
        console.error("Error fetching participants:", error);
        return res.status(500).json("Internal server error");
    }
};



const addevent = async (req, res) => {
    const { id, name, place, description, date } = req.body;

    if (!id || !name || !place || !description || !date) {
        return res.status(400).json("All fields (id, name, place, description, date) are required!");
    }

    try {
        const eventRef = ref(database, "/eventlist");
        const snapshot = await get(eventRef);
        if (snapshot.exists()) {
            const events = snapshot.val();
            const eventExists = Object.values(events).some(event => event.id === id);

            if (eventExists) {
                return res.status(400).json("Event with this ID already exists!");
            }
        }
        const timestamp = new Date().toISOString();
        const newEvent = { id, name, place, description, date, timestamp };

        const newEventRef = push(eventRef, newEvent);

        console.log("New event added with key:", newEventRef.key);
        return res.status(201).json("Event added successfully!");
    } catch (error) {
        console.error("Error adding event:", error);
        return res.status(500).json("Internal server error");
    }
};

const getLatestEvent = async (req, res) => {
    try {
        const eventRef = ref(database, "/eventlist");
        const snapshot = await get(eventRef);

        if (!snapshot.exists()) {
            return res.status(404).json("No events found!");
        }

        const events = snapshot.val();
        const eventList = Object.values(events);

        // Find the event with the latest timestamp
        const latestEvent = eventList.reduce((latest, event) => {
            return (!latest || event.timestamp > latest.timestamp) ? event : latest;
        }, null);

        if (!latestEvent) {
            return res.status(404).json("No events found!");
        }

        return res.status(200).json(latestEvent);
    } catch (error) {
        console.error("Error fetching latest event:", error);
        return res.status(500).json("Internal server error");
    }
};

const contact_Us = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json("All fields (name, email, message) are required!");
    }

    try {
        const contactRef = ref(database, "/contacts");
        const newContactRef = push(contactRef, { name, email, message });

        console.log("New contact form submitted with key:");
        return res.status(201).json("submitted successfully!");
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return res.status(500).json(" error");
    }
};
export { registerParticipant, register, getParticipants, adminlogin, addevent, contact_Us, getLatestEvent }