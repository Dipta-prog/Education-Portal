import React from 'react';
import SingleTeacherData from '../SingleTeacherData/SingleTeacherData';

const TeacherList = () => {
    
    const teachersData = [{ name: 'sajal', id: 212, email: 'test@test.com' }, { name: 'sajal', id: 212, email: 'test@test.com' }, { name: 'sajal', id: 212, email: 'test@test.com' }, { name: 'sajal', id: 212, email: 'test@test.com' }, { name: 'sajal', id: 212, email: 'test@test.com' },]

    return (
        <div className="row container d-flex justify-content-center align-items-center">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Teachers List</h3>
                    </div>
                </div>
            </div>
            <div classNameName="col-md-8 border border-2">
                <table className="table table-hover">
                    <thead className="table-header">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    {
                        teachersData.map(teacher => <SingleTeacherData key={teacher.id} teacher={teacher} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default TeacherList;