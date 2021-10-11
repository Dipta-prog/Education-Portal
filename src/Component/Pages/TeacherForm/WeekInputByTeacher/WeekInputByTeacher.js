import React from 'react';
import { useForm } from "react-hook-form";

const WeekInputByTeacher = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const weeklyData = {
            discussionTopics: data.discussionTopics,
            learningOutcomes: data.learningOutcomes,
            lectureSlide: data.lectureSlide,
        };
        console.log(weeklyData);
    };

    return (
        <div className="mt-5 pt-t">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Weekly Topics</h3>
                <label htmlFor="discussionTopics">Discussion Topics</label>
                <textarea className="form-control" {...register("discussionTopics")} required ></textarea>

                <label htmlFor="learningOutcomes">Learning Outcomes</label>
                <textarea className="form-control" {...register("learningOutcomes")} required ></textarea>

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <br />

                <div className="text-center">
                    <button type="submit" className="btn btn-success">Success</button>
                </div>
            </form>
        </div>
    );
};

export default WeekInputByTeacher;