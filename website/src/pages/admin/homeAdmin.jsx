import React, { useState } from 'react';
import "../../assets/scss/homeAdmin.scss";

export default function HomeAdmin() {
    // Dummy data to simulate the request list
    const [searchTerm, setSearchTerm] = useState("");

    const requests = [
        // Add your request objects here
        { id: 1, studentId: "12345", name: "John Doe", requested: "Books" },
        { id: 2, studentId: "67890", name: "Jane Smith", requested: "Laptop" }
    ];

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRequests = requests.filter((request) =>
        request.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.requested.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Your sidebar content */}
            </div>

            {/* Main content */}
            <div className="home-admin">
                <div className="header">
                    <h1>CURRENT REQUEST</h1>
                </div>
                <div className="filter-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Student ID No.</th>
                            <th>Name</th>
                            <th>Requested</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.studentId}</td>
                                <td>{request.name}</td>
                                <td>{request.requested}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
