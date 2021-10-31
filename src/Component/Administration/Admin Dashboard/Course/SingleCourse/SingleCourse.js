import React from 'react';

const SingleCourse = ({course}) => {
    const {courseName, courseId, image, details} = course;
    return (
        <div className="col-md-4">
            <div className="card p-3">
            <img src={image} className="card-img-top p-3" height="300px" alt="..." />
                <div className="card-title"><h5>{courseName}</h5></div>
                <p className="">
                {details}
                </p>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="btn btn-success">Edit</div>
                    <div className="btn btn-danger">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;