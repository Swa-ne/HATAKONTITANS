import React from 'react';
import "../../assets/scss/cashier/cashier.scss"


export default function StudentList() {
    // Dummy data to simulate the user list
    const users = [
        // Add your user objects here
    ];

    return (
        <div className="user-list-container">
            <div className='nav'>
              <ul>
              <li> <a href="">+Add</a></li>
              <li> <a href="">Edit</a></li>
              <li> <a href="">Print</a></li>
              </ul>
            </div>
            
            <div className="user-list-table">
               
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Student id</th>
                            <th>Reference</th>
                            <th>Payable Fee</th>
                            <th>Balance</th>
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