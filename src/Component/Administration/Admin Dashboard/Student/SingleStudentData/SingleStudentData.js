import React from 'react';
import "../../tableStyle/tableStyle.scss";

const SingleStudentData = ({ student }) => {
    const { name, id, email, image } = student;

    const handleEdit = () => {

    }

    const handleDelete = () => {
        
    }


    return (
            <tr>
                <td><img className="table-img" src={image} alt="" /></td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex justify-content-lg-center align-items-center">
                        <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-danger" onClick={handleDelete}>delete</button>
                    </div>
                </td>
            </tr>
    );
};

export default SingleStudentData;