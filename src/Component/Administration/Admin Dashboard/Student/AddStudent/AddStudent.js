import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddStudent = () => {
    const [studentData, setStudentData] = useState({
        id: null,
        name: '',
        mobile: null,
        department: '',
        userName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        role: '',
        zip: null,
        country: '',
        image: ''
    })
    const [imageURL, setImageURL] = useState(null)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        console.log(data);
        const newStudentData = {
            ...studentData,
            id: data.id,
            name: data.name,
            mobile: data.mobile,
            department: data.department,
            userName: data.userName,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            role: data.role,
            zip: data.zip,
            country: data.country,
            image: imageURL
        }
        const url = 'http://localhost:1000/admin/addStudent'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudentData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        const userData = {
            ...studentData,
            name: data.name, 
            email: data.email,
            role: data.role,
            userName: data.userName,
            password: data.password,
        }

        const signupUrl = 'http://localhost:1000/user/signup'
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
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '3a55021cd0e8e960fecdb61ee3bca9f2')
        imageData.append('image', event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    
    }


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="component-bg-color">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="page-title my-3">Add Students</h2>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h5 className="form-title"><span>Basic Details</span></h5>
                                        </div><div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Student ID</label>
                                                <input {...register("id", { required: true })} type="number" className="form-control" />
                                                {errors.id && <span className="text-danger">Id Is Required</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Name</label>
                                                <input {...register("name", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Mobile Number</label>
                                                <input {...register("mobile", { required: true })} type="number" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Department</label>
                                                <input {...register("department", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="form-title"><span>Login Details</span></h5>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Username</label>
                                                <input {...register("userName", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Email ID</label>
                                                <input {...register("email", { required: true })} type="email" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input {...register("password", { required: true })} type="password" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Role</label>
                                                <input {...register("role", { required: true })} type="text" value="student" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="form-title"><span>Address</span></h5>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Address</label>
                                                <input {...register("address", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">City</label>
                                                <input {...register("city", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">State</label>
                                                <input {...register("state", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Zip Code</label>
                                                <input {...register("zip", { required: true })} type="number" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Country</label>
                                                <input {...register("country", { required: true })} type="text" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Image</label>
                                                <input {...register("image")} type="file" onChange={handleImageUpload} className="form-control" />
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
        </div>
    );
};

export default AddStudent;