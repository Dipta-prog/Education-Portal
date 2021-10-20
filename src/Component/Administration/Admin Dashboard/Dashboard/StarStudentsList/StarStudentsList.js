import React, { useEffect, useState } from 'react';
import SingleStudentData from '../../Student/SingleStudentData/SingleStudentData';

const StarStudentsList = () => {

    const [starStudentsData, setStarStudentsData] = useState([]);
    useEffect(() => {
        const url = "https://education-portal-1.herokuapp.com/admin/allStudent"
        fetch(url)
            .then(res => res.json())
            .then(data => setStarStudentsData(data.result))
    }, [starStudentsData])

    return (
        <div className="row component-bg-color">
            <div>
                <h2 className="page-title my-3">Star Students List</h2>
                <div className="table-users bg-white shadow-lg">
                    <div className="table-header">Star Students</div>
                    <table className="table" cellSpacing="0">
                        <tr>
                            <th>Picture</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Handle</th>
                        </tr>
                        {
                            starStudentsData.map(student => <SingleStudentData key={student.id} student={student} />)
                        }
                    </table>
                </div>
            </div>
        </div>

    );
};

export default StarStudentsList;