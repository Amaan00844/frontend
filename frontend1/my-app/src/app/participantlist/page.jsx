// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const ParticipantsList = ({ params }) => {
//     const { eventId } = params;
//     const [participants, setParticipants] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchParticipants = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/events/${eventId}/participants`);
//                 setParticipants(Object.values(response.data));
//             } catch (error) {
//                 console.error("Error fetching participants:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchParticipants();
//     }, [eventId]);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
//             <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-4xl w-full">
//                 <h1 className="text-3xl font-bold text-center text-white mb-8">Participants List</h1>
//                 {loading ? (
//                     <p className="text-gray-200">Loading participants...</p>
//                 ) : participants.length > 0 ? (
//                     <div className="space-y-4">
//                         {participants.map((participant) => (
//                             <div
//                                 key={participant.id}
//                                 className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white border-opacity-20 hover:border-opacity-40"
//                             >
//                                 <p className="text-white"><strong>Name:</strong> {participant.name}</p>
//                                 <p className="text-white"><strong>Email:</strong> {participant.email}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-200">No participants found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ParticipantsList;
"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const ParticipantsList = ({ eventId }) => {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/events/${eventId}/participants`);
                setParticipants(response.data);
            } catch (error) {
                console.error("Error fetching participants:", error);
                setError("Failed to load participants.");
            } finally {
                setLoading(false);
            }
        };

        fetchParticipants();
    }, [eventId]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-white mb-8 animate-fade-in">
                    Participants List
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center animate-fade-in">{error}</p>
                ) : participants.length > 0 ? (
                    <div className="space-y-4">
                        {participants.map((participant, index) => (
                            <div
                                key={participant.email || index}
                                className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-20 hover:border-opacity-40 animate-fade-in-up"
                            >
                                <p className="text-white"><strong>Name:</strong> {participant.name}</p>
                                <p className="text-white"><strong>Email:</strong> {participant.email}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-200 text-center animate-fade-in">No participants found.</p>
                )}
            </div>
        </div>
    );
};

export default ParticipantsList;