import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        details: '',
        courseCode: null,
        image: ''
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        const newCourseData = {
            ...courseData,
            courseName: data.courseName,
            details: data.details,
            courseCode: data.courseCode,
            image: data.image
        }
        const url = 'http://localhost:1000/course/addCourse'

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
                                            <h5 className="form-title"><span>Course Details</span></h5>
                                        </div><div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Name</label>
                                                <input {...register("courseName", { required: true })} placeholder="course name" type="text" className="form-control field-box" />
                                                {errors.courseName && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Details</label>
                                                <input {...register("details", { required: true })} placeholder="Course Details" type="text" className="form-control field-box" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Course Code</label>
                                                <input {...register("courseCode", { required: true })} placeholder="Course Code" type="number" className="form-control field-box" />
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-12">
                                            <div className="form-group">
                                                <label className="form-label">Image</label>
                                                <input {...register("image", { required: true })}  type="file" className="form-control " />
                                            </div>
                                        </div> */}
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