import React, { useEffect, useState } from "react";
import "../../assets/scss/cashier.scss";
import { getUnpaidTransaction } from "../../services/finance";

export default function Cashier() {
    // Dummy data to simulate the user list
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("studentID");

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

    useEffect(() => {
        async function fetchData (){

            const result = await getUnpaidTransaction()
            const resultData = result.message
            const transformed = resultData.map(data => ({
                transactionID: data._id,
                date: data.createdAt,
                studentID: data.userID.studentInformation.studentID,
                payablefee: data.requests.reduce((total, item) => total + item.quantity, 0) * 50 // Assuming this is a field in your data
              }));
            setUsers(transformed)
        }
        fetchData()
        
    }, [])
    return (
        <div className="home-admin-container">
            <div className="home-admin">
                <div className="header">
                    <h1>CASHIER</h1>
                </div>
                <div className="filter-container">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} />
                    <select value={filterBy} onChange={handleFilterChange}>
                        <option value="studentID">Student ID</option>
                        <option value="payablefee">Payable Fee</option>
                    </select>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Student ID</th>
                            <th>Payable Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user) => (
                            <tr key={user.transactionID}>
                                <td>{user.transactionID}</td>
                                <td>{user.date}</td>
                                <td>{user.studentID}</td>
                                <td>{user.payablefee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
