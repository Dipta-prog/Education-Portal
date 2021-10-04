import React from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        const courseData = {
            courseName: data.courseName,
            details: data.details,
            id: data.id,
            image: data.image
        }
        console.log(courseData)
        const url = '/addACourse'

        console.log(courseData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };


    return (
        <div className="d-flex m-5 justify-content-center align-items-center">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("courseName", { required: true })} />
                    {errors.courseName && <span>This field is required</span>}
                    <br />
                    <input {...register("details", { required: true })} />
                    <br />
                    <input {...register("id", { required: true })} />
                    <br />
                    <input {...register("image", { required: true })} />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;