import React from 'react';
import "../../assets/scss/homeAdmin.scss"

export default function HomeAdmin() {
    return (
        <div className="home-admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Your sidebar content */}
            </div>

            {/* Main content */}
            <div className="home-admin">
                <div className="header">
                    <h1>STUDENT WAITING LIST</h1>
                </div>
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Student ID No.</th>
                            <th>SEX</th>
                            <th>Complete Address</th>
                            <th>Place of Birth</th>
                            <th>Mobile No.</th>
                            <th>Last School Term Attended</th>
                            <th>Elementary School Year Graduated</th>
                            <th>Junior High School Year Graduated</th>
                            <th>Senior High School Year Graduated</th>
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
