import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import WeekInputByTeacher from './WeekInputByTeacher/WeekInputByTeacher';

const TeacherForm = () => {

    const [courseDetailsData, setCourseDetailsData] = useState({
        courseCode: null,
        program: '',
        faculty: '',
        courseCategory: '',
        courseOutline: '',
        textBook: '',
        teacherName: '',
        officeRoom: '',
        cellNumber: null,
        email: '',
        guideline: '',
        announcement: '',
    })

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const temp = {
            ...courseDetailsData, 
            courseCode: data.courseCode,
            program: data.program,
            faculty: '',
            courseCategory: '',
            courseOutline: '',
            textBook: '',
            teacherName: '',
            officeRoom: '',
            cellNumber: null,
            email: '',
            guideline: '',
            announcement: '',
        }
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

                                <label htmlFor="courseCode">Program</label>
                                <input className="form-control" {...register("program")} required />

                                <label htmlFor="courseCode">Faculty</label>
                                <input className="form-control" {...register("faculty")} required />

                                <label htmlFor="courseCode">Course Category</label>
                                <input className="form-control" {...register("courseCategory")} required />

                                <h3>Course Outline</h3>
                                <textarea className="form-control" rows="8" cols="10" required></textarea>

                                <h3>Text Book</h3>
                                <input className="form-control" type="file" rows="8" cols="10" />

                            </div>


                            <div className="col-md-6">

                                <h3>Course Information</h3>
                                <label htmlFor="courseCode">Teacher Name</label>
                                <input className="form-control" {...register("courseCode")} required />

                                <label htmlFor="courseCode">Office Room</label>
                                <input className="form-control" {...register("program")} required />

                                <label htmlFor="courseCode">Cell Number</label>
                                <input className="form-control" {...register("faculty")} required />

                                <label htmlFor="courseCode">Email</label>
                                <input className="form-control" {...register("courseCategory")} required />


                                <h3>Guideline</h3>
                                <textarea className="form-control" rows="8" cols="10" required></textarea>


                                <h3>Announcement</h3>
                                <textarea className="form-control" rows="8" cols="10" required></textarea>
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