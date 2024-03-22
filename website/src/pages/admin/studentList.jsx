import React, { useState } from 'react';
import "../../assets/scss/homeAdmin.scss";

export default function StudentList() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("firstName");

    const users = [
        // Add your user objects here
        { id: 1, firstName: "John", lastName: "Doe", address: "123 Main St", department: "Computer Science", email: "john@example.com", contactNo: "123-456-7890" },
        { id: 2, firstName: "Jane", lastName: "Smith", address: "456 Elm St", department: "Electrical Engineering", email: "jane@example.com", contactNo: "987-654-3210" }
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
                    <h1>Student List</h1>
                </div>
                <div className="filter-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                    <select value={filterBy} onChange={handleFilterChange}>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="address">Address</option>
                        <option value="department">Department</option>
                        <option value="email">Email</option>
                        <option value="contactNo">Contact No.</option>
                    </select>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Contact No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>{user.department}</td>
                                <td>{user.email}</td>
                                <td>{user.contactNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
