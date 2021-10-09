import React from 'react';

const SingleCourse = ({course}) => {
    const {courseName, courseId, details} = course;
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-title"><h5>{courseName}</h5></div>
                <div className="card-body">
                {details}
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="btn btn-success">Edit</div>
                    <div className="btn btn-danger">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;