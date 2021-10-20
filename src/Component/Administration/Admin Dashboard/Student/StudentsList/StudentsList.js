import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../Shared/Sidebar/Sidebar';
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

    // const studentsData = [
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    //     { name: 'sajal', id: 212, email: 'test@test.com' },
    // ];

    return (
       <div className="row">
           <div className="col-md-2"> <Sidebar /> </div>
           <div className="col-md-10"> <div className="row d-flex justify-content-center align-items-center">
            <div class="col-md-8">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2 className="page-title my-3">Students List</h2>
                        </div>
                    </div>
                </div>
                <div class="table-users bg-white shadow-lg">
                    <div class="header">Students</div>

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
        </div></div>
       </div>
    );
};

export default StudentsList;