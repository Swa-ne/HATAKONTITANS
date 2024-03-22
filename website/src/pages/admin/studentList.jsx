import React from 'react';
import "../../assets/scss/StudentList.scss"

export default function StudentList() {
    // Dummy data to simulate the user list
    const users = [
        // Add your user objects here
    ];

    return (
        <div className="user-list-container">
            <header className="user-list-header">
                <h1>User List</h1>
                <button className="add-user-btn">Add User</button>
            </header>
            <div className="user-list-controls">
                <div className="view-toggle">
                    <button>List</button>
                    <button>Grid</button>
                </div>
                <input type="text" placeholder="Search..." />
                <select>
                    <option>Select Department</option>
                    {/* Map through departments here */}
                </select>
                <select>
                    <option>Select Designation</option>
                    {/* Map through designations here */}
                </select>
            </div>
            <div className="user-list-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.designation}</td>
                                <td>{user.department}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className="user-list-pagination">
                {/* Pagination controls here */}
            </footer>
        </div>
    );
}