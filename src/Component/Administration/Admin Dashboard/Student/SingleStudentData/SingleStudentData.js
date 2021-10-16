import React from 'react';
import image from '../../../../../Media/img/Home-Img/photo-gallery/1.jpg';
import "../../tableStyle/tableStyle.scss";

const SingleStudentData = ({ student }) => {
    const { name, id, email } = student;
    return (
        
            <tr>
                <td><img className="table-img" src={image} alt="" /></td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex justify-content-lg-center align-items-center">
                        <button className="btn btn-primary me-2">Edit</button>
                        <button className="btn btn-danger">delete</button>
                    </div>
                </td>
            </tr>
    );
};

export default SingleStudentData;