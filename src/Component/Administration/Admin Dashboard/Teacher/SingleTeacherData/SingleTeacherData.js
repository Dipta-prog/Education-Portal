import React from 'react';
import '../../tableStyle/tableStyle.scss';

const SingleTeacherData = ({ teacher }) => {
    const { id, name, email, image } = teacher;

    return (
            <tr>
                <td><img className="table-img" src={image} alt="" /></td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex justify-content-lg-center align-items-center">
                        <button className="btn btn-primary  me-2">Edit</button>
                        <button className="btn btn-danger">delete</button>
                    </div>
                </td>
            </tr>
    );
};

export default SingleTeacherData;