import React from 'react';

const SingleDepartment = ({ department }) => {
    const { departmentName, image, departmentCode } = department;
    return (
        <div className="col-md-3">
            <div className="card">
            <img src={image} class="card-img-top" alt="..." />
                <div className="card-title"><h5>{departmentName}</h5></div>
                <div className="card-body">
                    {departmentName}
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="btn btn-success">Edit</div>
                    <div className="btn btn-danger">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default SingleDepartment;