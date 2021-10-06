import React from 'react';
import { useForm } from "react-hook-form";

const WeekInputByTeacher = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const weeklyData = {
            discussionTopics: data.discussionTopics,
            learningOutcomes: data.learningOutcomes,
            lectureSlide: data.lectureSlide,
            weeklyOutcome: data.weeklyOutcome,
        };
        console.log(weeklyData);
    };

    return (
        <div className="mt-5 pt-t">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Weekly Topics</h3>
                <label htmlFor="discussionTopics">Discussion Topics</label>
                <input className="form-control" {...register("discussionTopics")} required />

                <label htmlFor="learningOutcomes">Learning Outcomes</label>
                <input className="form-control" {...register("learningOutcomes")} required />

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <label htmlFor="lectureSlide">Weekly Outcome</label>
                <input className="form-control" type="file" {...register("weeklyOutcome")} />

                <br />

                <div className="text-center">
                    <button type="submit" class="btn btn-success">Success</button>
                </div>
            </form>
        </div>
    );
};

export default WeekInputByTeacher;