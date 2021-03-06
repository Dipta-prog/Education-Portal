import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeNewAdmin = () => {
    const [adminData, setAdminData] = useState({
        id: null,
        name: '',
        userName: '',
        email: '',
        role: '',
        password: '',
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        const newAdminData = {
            ...adminData,
            id: data.id,
            name: data.name,
            userName: data.userName,
            email: data.email,
            password: data.password
        }
        console.log(newAdminData)
        const url = 'https://education-portal-1.herokuapp.com/admin/addAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdminData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        const userData = {
            ...adminData,
            name: data.name,
            email: data.email,
            role: data.role,
            userName: data.userName,
            password: data.password,
        }

        console.log(userData);

        const signupUrl = 'https://education-portal-1.herokuapp.com/user/signup'
        fetch(signupUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    };


    return (
        <div className="component-bg-color">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="page-title my-3">Make New Admin</h2>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-sm-12">
                    <div className="card shadow-lg bg-white">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="form-title"><span>Admin Details</span></h5>
                                    </div><div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Admin ID</label>
                                            <input {...register("id", { required: true })} placeholder="Admin ID" type="number" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input {...register("name", { required: true })} placeholder="Admin Name" type="text" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">User Name</label>
                                            <input {...register("userName", { required: true })} placeholder="Admin Name" type="text" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">role</label>
                                            <input {...register("role", { required: true })} value="admin" type="text" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input {...register("email", { required: true })} placeholder="Admin Email" type="text" className="form-control field-box" />
                                            {errors.email && <span className="text-danger">Write a Valid Email</span>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Password</label>
                                            <input {...register("password", { required: true })} type="password" placeholder="Password" className="form-control field-box" />
                                            {errors.password && <span className="text-danger">Write a Valid Password</span>}

                                        </div>
                                    </div>
                                </div>
                                <input className="btn btn-primary mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeNewAdmin;

