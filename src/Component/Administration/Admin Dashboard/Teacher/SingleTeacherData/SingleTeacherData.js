const SingleTeacherData = ({ teacher }) => {
    const { id, name, email, image, _id } = teacher;

    const handleDelete = (id) => {
        console.log("id", id);
        fetch(`https://education-portal-1.herokuapp.com/admin/deleted/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log('deleted success', result))
            .catch(err => console.log(err));
    }

    return (
            <tr>
                <td><img className="table-img" src={image} alt="" /></td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <div className="d-flex justify-content-lg-center align-items-center">
                        <button className="btn btn-primary me-2">Edit</button>
                        <button className="btn btn-danger" onClick={()=>handleDelete(_id)}>delete</button>
                    </div>
                </td>
            </tr>
    );
};

export default SingleTeacherData;