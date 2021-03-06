import React from 'react';

const SingleCourse = ({course}) => {
    const {courseName, courseId, image, details, _id} = course;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://education-portal-1.herokuapp.com/course/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log('deleted success', result))
            .catch(err => console.log(err));
    }

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
                    <div className="btn btn-danger" onClick={()=> handleDelete(_id)}>Delete</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;