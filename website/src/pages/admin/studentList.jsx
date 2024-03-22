import React, { useState, useEffect } from 'react';

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data from your API
        fetch('your_api_endpoint_here')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
}
