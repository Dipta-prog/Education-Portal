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
    }, [])


    return (
        <div className="row component-bg-color">
            <div className="col-md-3">
                {/* <Sidebar /> */}
            </div>
            <div className="row col-md-9">
                {
                    allDepartment.map(department => <SingleDepartment key={department.id} department={department} />)
                }
            </div>
        </div>
    );

};

export default DepartmentList;