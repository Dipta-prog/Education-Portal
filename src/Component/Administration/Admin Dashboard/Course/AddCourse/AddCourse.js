import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        courseDetails: '',
        courseCode: '',
        image: null,
        courseFinishedDate: '',
        courseFinishedLength: null,
        courseCredit: null,
        departmentName: ''
    })
    const [imageURL, setImageURL] = useState(null)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        const newCourseData = {
            ...courseData,
            courseName: data.courseName,
            courseDetails: data.courseDetails,
            courseCode: data.courseCode,
            image: imageURL,
            courseFinishedDate: data.courseFinishedDate,
            courseFinishedLength: data.courseFinishedLength,
            courseCredit: data.courseCredit,
            departmentName: data.departmentName,
            
        }
        const url = 'https://education-portal-1.herokuapp.com/course/addCourse'

        console.log(newCourseData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCourseData)
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
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 component-bg-color">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="page-title my-3">Add New Course</h2>
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
                                            <h5 className="form-title"><span>Add Course Details</span></h5>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Name</label>
                                                <input {...register("courseName", { required: true })} placeholder="Course Name" type="text" className="form-control field-box" />
                                                {errors.courseName && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Details</label>
                                                <input {...register("courseDetails", { required: true })} placeholder="Course Details" type="text" className="form-control field-box" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Code</label>
                                                <input {...register("courseCode", { required: true })} placeholder="Course Code" type="number" className="form-control field-box" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Department Name</label>
                                                <input {...register("departmentName", { required: true })} placeholder="Department Name" type="text" className="form-control field-box" />
                                                {errors.departmentName && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Finished Date</label>
                                                <input {...register("courseFinishedDate", { required: true })} placeholder="Course Finished Date" type="date" className="form-control field-box" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Image</label>
                                                <input {...register("image", { required: true })} onChange={handleImageUpload} type="file" className="form-control " />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Finished length</label>
                                                <input {...register("courseFinishedLength", { required: true })} placeholder="Course Finished length" type="number" className="form-control field-box" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Credit</label>
                                                <input {...register("courseCredit", { required: true })} placeholder="Course Credit" type="number" className="form-control field-box" />
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

export default AddCourse;