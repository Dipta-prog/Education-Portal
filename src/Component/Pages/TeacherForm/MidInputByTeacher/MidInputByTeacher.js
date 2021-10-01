import React from 'react';
import { useForm } from "react-hook-form";

const MidInputByTeacher = () => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <h3>Mid Term</h3>
                <label htmlFor="discussionTopics">Midterm Syllabus</label>
                <textarea className="form-control" {...register("discussionTopics")} rows="6" cols="10" required ></textarea>

                <label htmlFor="learningOutcomes">Learning Outcomes</label>
                <textarea className="form-control" {...register("discussionTopics")} rows="6" cols="10" required ></textarea>

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <br />

                <div className="text-center">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MidInputByTeacher;