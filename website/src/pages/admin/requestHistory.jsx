import React from 'react';
import "../../assets/scss/homeAdmin.scss"

export default function HomeAdmin() {
    // Sample data, replace this with your actual data
    const studentData = [
       
    ];

    return (
        <div className="home-admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Your sidebar content */}
            </div>

            {/* Main content */}
            <div className="home-admin">
                <div className="header">
                    <h1>Request History</h1>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Date Requested</th>
                            <th>Student Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Paid</th>
                            <th>Admin Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map(student => (
                            <tr key={student.id}>
                                <td>{student.dateRequested}</td>
                                <td>{student.studentName}</td>
                                <td>{student.title}</td>
                                <td>{student.status}</td>
                                <td>{student.paid ? 'Yes' : 'No'}</td>
                                <td>{student.adminName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
