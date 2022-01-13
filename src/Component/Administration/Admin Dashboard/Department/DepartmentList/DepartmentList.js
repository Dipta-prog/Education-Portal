import React, { useEffect, useState } from 'react';
import SingleDepartment from '../SingleDepartment/SingleDepartment';

const DepartmentList = () => {
    const [allDepartment, setAllDepartment] = useState([]);
    useEffect(() => {
        const url = 'https://education-portal-1.herokuapp.com/department/allDepartment'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllDepartment(data.result))
            .catch(err => console.log(err))
    }, [allDepartment])


    return (
        <div className="component-bg-color">
         <h2 className="page-title my-5 text-center">All Department</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    allDepartment.map(department => <SingleDepartment key={department.id} department={department} />)
                }
            </div>
        </div>
    );

};

export default DepartmentList;