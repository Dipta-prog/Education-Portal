import React, { useEffect, useState } from 'react';
import "../../tableStyle/tableStyle.scss";
import SingleStudentData from '../SingleStudentData/SingleStudentData';

const StudentsList = () => {

    const [studentsData, setStudentsData] = useState([]);
    useEffect(() => {
        const url = "https://education-portal-1.herokuapp.com/admin/allStudent"
        fetch(url)
            .then(res => res.json())
            .then(data => setStudentsData(data.result))
    }, [studentsData])


    return (
        
            <div className="component-bg-color">
                <h2 className="page-title my-3">Students List</h2>
                <div className="table-users bg-white shadow-lg">
                    <div className="table-header">Students</div>
                    <table className="table" cellSpacing="0">
                        <tr>
                            <th>Picture</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Handle</th>
                        </tr>
                        {
                            studentsData.map(student => <SingleStudentData key={student.id} student={student} />)
                        }
                    </table>
                </div>
            </div>
    );
};

export default StudentsList;