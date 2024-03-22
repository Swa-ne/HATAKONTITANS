import React, { useState, useEffect } from 'react';
import "../../assets/scss/homeAdmin.scss";
import { getCurrentRequest } from '../../services/finance';

export default function HomeAdmin() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("firstName");

   
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData (){

            const result = await getCurrentRequest()
            const resultData = result.message
            const transformed = resultData.map(data => ({
                firstName: data.userID.studentInformation.firstName,
                lastName: data.userID.studentInformation.lastName,
                studentID: data.userID.studentInformation.studentID,
                requested: data.requests
            }));
            setUsers(transformed)
        }
        fetchData()
        
    }, [])
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };

    let [filteredData, setFilteredData] = useState([])
    useEffect(() =>{
        setFilteredData(users.filter((user) => user[filterBy].toLowerCase().includes(searchTerm.toLowerCase())));
    },[users, filterBy, searchTerm])
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
                        <option value="studentID">Student ID</option>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                    </select>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort("studentID")}>Student ID</th>
                            <th onClick={() => handleSort("firstName")}>First Name</th>
                            <th onClick={() => handleSort("lastName")}>Last Name</th>
                            <th onClick={() => handleSort("requested")}>Requested</th>
                        </tr>
                    </thead>
                    <tbody>                                                                      
                        {sortedData.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.studentID}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.requested}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
