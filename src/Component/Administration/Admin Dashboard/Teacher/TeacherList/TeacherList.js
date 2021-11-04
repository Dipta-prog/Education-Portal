import { React, useEffect, useState } from 'react';
import SingleTeacherData from '../SingleTeacherData/SingleTeacherData';

const TeacherList = () => {

    const [teachersData, setTeachersData] = useState([]);
    useEffect(() => {
        const url = "https://education-portal-1.herokuapp.com/admin/allTeacher"
        fetch(url)
            .then(res => res.json())
            .then(data => setTeachersData(data.result))
    }, [teachersData])


    return (
        <div className="component-bg-color">
                    <h2 className="page-title my-3">Teachers List</h2>
                    <div class="table-users bg-white shadow-lg">
                        <div class="table-header">Teachers</div>

                        <table className="table" cellSpacing="0">
                            <tr>
                                <th>Picture</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Handle</th>
                            </tr>
                            {
                                teachersData.map(teacher => <SingleTeacherData key={teacher.id} teacher={teacher} />)
                            }
                        </table>
                    </div>
                </div>
    );
};

export default TeacherList;