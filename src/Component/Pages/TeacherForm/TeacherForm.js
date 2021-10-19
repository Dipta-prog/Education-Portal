import React from 'react';
import { useForm } from "react-hook-form";
import WeekInputByTeacher from './WeekInputByTeacher/WeekInputByTeacher';

const TeacherForm = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        reset('', {
            keepValues: false,
        })
        
        const eventData = {
            courseCode: data.courseCode,
            program: data.program,
            faculty: data.faculty,
            courseCategory: data.courseCategory,
            courseOutline: data.courseOutline,
            // textBook: data.textBook,
            teacherName: data.teacherName,
            officeRoom: data.officeRoom,
            cellNumber: data.cellNumber,
            email: data.email,
            guideline: data.guideline,
            announcement: data.announcement,
        };

        fetch('https://education-portal-1.herokuapp.com/courseInformation/addCourseDataByTeacher', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };



    return (
        <div className="teacherForm">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-7 mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Basic Information</h3>
                                <label>Course Code</label>
                                <input className="form-control" {...register("courseCode")} required />

                                <label>Program</label>
                                <input className="form-control" {...register("program")} required />

                                <label>Faculty</label>
                                <input className="form-control" {...register("faculty")} required />

                                <label>Course Category</label>
                                <input className="form-control" {...register("courseCategory")} required />

                                <label>Course Outline</label>
                                <textarea className="form-control" {...register("courseOutline")} required></textarea>

                                {/* <h3>Text Book</h3>
                                <input className="form-control" type="file" rows="8" cols="10" /> */}

                            </div>


                            <div className="col-md-6">

                                <h3>Course Information</h3>
                                <label>Teacher Name</label>
                                <input className="form-control" {...register("teacherName")} required />

                                <label>Office Room</label>
                                <input className="form-control" {...register("officeRoom")} required />

                                <label>Cell Number</label>
                                <input className="form-control" {...register("cellNumber")} required />

                                <label>Email</label>
                                <input className="form-control" {...register("email")} required />

                                <label htmlFor="cellNumber">Cell Number</label>
                                <input className="form-control" type="number" {...register("cellNumber")} required />

                                <label>Guideline</label>
                                <textarea className="form-control" {...register("guideline")} required></textarea>

                                <label htmlFor="guideline">Guideline</label>
                                <input className="form-control" name="guideline" {...register("guideline")} required />

                                <label>Announcement</label>
                                <textarea className="form-control" {...register("announcement")} required></textarea>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>


                    <div>
                        <WeekInputByTeacher />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherForm;