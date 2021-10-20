import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../../../Shared/Sidebar/Sidebar';


const AddDepartment = () => {
    const [departmentData, setDepartmentData] = useState({
        departmentName: '',
        details: '',
        departmentCode: null,
        image: '',

    })
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })

        const newDepartmentData = {
            ...departmentData,
            departmentName: data.departmentName,
            details: data.details,
            departmentCode: data.departmentCode,
            image: imageURL,
        }
        const url = 'https://education-portal-1.herokuapp.com/department/addDepartment'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDepartmentData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
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
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 component-bg-color">
                <div className="d-flex m-5 justify-content-center align-items-center">
                    <div className="">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="page-title my-3">Add New Department</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12">
                                <div className="card shadow-lg bg-white">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Department Name</label>
                                                        <input {...register("departmentName", { required: true })} type="text" className="form-control" />
                                                        {errors.departmentName && <span className="text-danger">Write a Department Name</span>}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Details</label>
                                                        <input {...register("details", { required: true })} type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Department Code</label>
                                                        <input {...register("departmentCode", { required: true })} type="number" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">image</label>
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
            </div>
        </div>
    );
};

export default AddDepartment;