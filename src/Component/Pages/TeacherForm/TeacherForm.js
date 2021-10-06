import React from 'react';
import { useForm } from "react-hook-form";
import WeekInputByTeacher from './WeekInputByTeacher/WeekInputByTeacher';

const TeacherForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const eventData = {
            courseCode: data.courseCode,
            program: data.program,
            faculty: data.faculty,
            courseCategory: data.courseCategory,
            courseOutline: data.courseOutline,
            textBook: data.textBook,
            teacherName: data.teacherName,
            officeRoom: data.officeRoom,
            cellNumber: data.cellNumber,
            email: data.email,
            guideline: data.guideline,
            announcement: data.announcement,
        };
        console.log(eventData);

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
                                <label htmlFor="courseCode">Course Code</label>
                                <input className="form-control" {...register("courseCode")} required />

                                <label htmlFor="program">Program</label>
                                <input className="form-control" {...register("program")} required />

                                <label htmlFor="faculty">Faculty</label>
                                <input className="form-control" {...register("faculty")} required />

                                <label htmlFor="courseCategory">Course Category</label>
                                <input className="form-control" {...register("courseCategory")} required />

                                <label htmlFor="courseOutline">Course Outline</label>
                                <input className="form-control" {...register("courseOutline")} required />

                                <label htmlFor="textBook">Text Book</label>
                                <input className="form-control" {...register("textBook")} type="file" />

                            </div>


                            <div className="col-md-6">

                                <h3>Teacher Name</h3>
                                <label htmlFor="teacherName">Teacher Name</label>
                                <input className="form-control" {...register("teacherName")} required />

                                <label htmlFor="officeRoom">Office Room</label>
                                <input className="form-control" {...register("officeRoom")} required />

                                <label htmlFor="cellNumber">Cell Number</label>
                                <input className="form-control" type="number" {...register("cellNumber")} required />

                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" {...register("email")} required />

                                <label htmlFor="guideline">Guideline</label>
                                <input className="form-control" name="guideline" {...register("guideline")} required />

                                <label htmlFor="announcement">Announcement</label>
                                <input className="form-control" name="announcement" {...register("announcement")} required />
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" class="btn btn-success">Submit</button>
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