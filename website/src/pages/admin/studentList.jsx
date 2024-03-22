import React from 'react';
import "../../assets/scss/homeAdmin.scss"

export default function StudentList() {
    // Dummy data to simulate the user list
    const users = [
        // Add your user objects here
    ];

    return (
        <div className="home-admin-container">
            <div className="home-admin">
                <div className="header">
                    <h1>Student List</h1>
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
                        {/* Data rows will go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}