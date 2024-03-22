import React, { useState } from 'react';
import "../../assets/scss/cashier.scss";

export default function Cashier() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("studentId");

    const users = [
        // Add your user objects here
        { dbNumber: "1", date: "03-24-2024", studentId: "03-2021-909090", reference: "008833", payablefee: "₱50.00"},
        { dbNumber: "2", date: "03-23-2024", studentId: "03-2021-101010", reference: "003322", payablefee: "₱50.00"}
    ];

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };

    const filteredData = users.filter((user) =>
        user[filterBy].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-admin-container">
            <div className="home-admin">
                <div className="header">
                    <h1>CASHIER</h1>
                </div>
                <div className="filter-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                    <select value={filterBy} onChange={handleFilterChange}>
                        <option value="studentId">Student ID</option>
                        <option value="reference">Reference No.</option>
                        <option value="payablefee">Payable Fee</option>
                    </select>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Student ID</th>
                            <th>Reference No.</th>
                            <th>Payable Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.dbNumber}</td>
                                <td>{user.date}</td>
                                <td>{user.studentId}</td>
                                <td>{user.reference}</td>
                                <td>{user.payablefee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
