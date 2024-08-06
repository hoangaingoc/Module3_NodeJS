import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function StudentDetails() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/students/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setStudent(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!student) {
        return <div>Student not found</div>;
    }

    return (
        <div>
            <div className={'add'}>
                <Link to={'/admin/students'}>Back to List</Link>
            </div>
            <div  align={'left'}>
                <h2>Thông tin chi tiết sinh viên: {student.name}</h2>
                <h3>Mô tả: {student.description}</h3>
                <h3>Hành động: {student.action}</h3>
                <h3>Điểm: {student.score}</h3>
            </div>

        </div>
    );
}
