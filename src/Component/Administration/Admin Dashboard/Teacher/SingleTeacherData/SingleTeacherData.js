import React from 'react';

const SingleTeacherData = ({ teacher }) => {
    const { id, name, email } = teacher;

    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default SingleTeacherData;