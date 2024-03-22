import React, { useState } from 'react';
import "../../assets/scss/homeAdmin.scss";

export default function HomeAdmin() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("firstName");

    const studentData = [
        // Add your student objects here
        { dateRequested: "1", firstName: "John", lastName: "Doe", requested: "123 Main St", department: "Computer Science", email: "john@example.com", contactNo: "123-456-7890" },
        { dateRequested: "2", firstName: "Jane", lastName: "Smith", requested: "456 Elm St", department: "Electrical Engineering", email: "jane@example.com", contactNo: "987-654-3210" }
    ];

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };

    const filteredData = studentData.filter((student) =>
        student[filterBy].toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting function
    const [sortKey, setSortKey] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    const sortedData = filteredData.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue < bValue) {
            return sortOrder === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
    });

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
                    <select value={filterBy} onChange={handleFilterChange}>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                    </select>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort("dateRequested")}>Date Requested</th>
                            <th onClick={() => handleSort("firstName")}>First Name</th>
                            <th onClick={() => handleSort("lastName")}>Last Name</th>
                            <th onClick={() => handleSort("requested")}>Requested</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((student) => (
                            <tr key={student.studentID}>
                                <td>{student.dateRequested}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.requested}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
