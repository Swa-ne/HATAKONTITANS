import React, { useEffect, useState } from "react";
import "../../assets/scss/homeAdmin.scss";
import { getHistoryRequest } from "../../services/finance";

export default function HomeAdmin() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("studentID");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };
    let [filteredData, setFilteredData] = useState([]);
    let [users, setUsers] = useState([]);
    useEffect(() => {
        setFilteredData(users.filter((user) => user[filterBy].toLowerCase().includes(searchTerm.toLowerCase())));
    }, [users, filterBy, searchTerm]);
    useEffect(() => {
        console.log(filteredData);
    }, [filteredData]);

    useEffect(() => {
        async function fetchData() {
            const result = await getHistoryRequest();
            const resultData = result.message;
            const transformed = resultData.map((data) => ({
                firstName: data.userID.studentInformation.firstName,
                lastName: data.userID.studentInformation.lastName,
                studentID: data.userID.studentInformation.studentID,
                requested: data.requests,
            }));
            setUsers(transformed);
        }
        fetchData();
    }, []);
    return (
        <div className="home-admin-container">
            {/* Sidebar */}
            <div className="sidebar">{/* Your sidebar content */}</div>

            {/* Main content */}
            <div className="home-admin">
                <div className="header">
                    <h1>REQUEST HISTORY</h1>
                </div>
                <div className="filter-container">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} />
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
                        {filteredData.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.studentID}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    {user.requested.map((req, idx) => (
                                        <span key={idx}>
                                            {req.request}
                                            {idx !== user.requested.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
