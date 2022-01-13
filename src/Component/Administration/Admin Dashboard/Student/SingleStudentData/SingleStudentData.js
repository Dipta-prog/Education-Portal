import React from 'react';
import "../../tableStyle/tableStyle.scss";

const SingleStudentData = ({ student }) => {
    const { name, id, email, image, _id } = student;

    const handleEdit = () => {

    }
    const handleDelete = (id) => {
        console.log("id", id);
        fetch(`https://education-portal-1.herokuapp.com/admin/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log('deleted success', result))
            .catch(err => console.log(err));
    }



    return (
        <tr>
            <td><img className="table-img" src={image} alt="" /></td>
            <td><b>{id}</b></td>
            <td><b>{name}</b></td>
            <td><b>{email}</b></td>
            <td>
                <div className="d-flex justify-content-lg-center align-items-center">
                    <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(_id)}>delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleStudentData;