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
                    <h1>CURRENT REQUEST</h1>
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
                        {/* Data rows will go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
