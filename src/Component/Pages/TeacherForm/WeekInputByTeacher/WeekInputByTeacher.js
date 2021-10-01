import React from 'react';
import { useForm } from "react-hook-form";

const WeekInputByTeacher = () => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div className="mt-5 pt-t">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Weekly Topics</h3>
                <label htmlFor="discussionTopics">Discussion Topics</label>
                <textarea className="form-control" {...register("discussionTopics")} rows="6" cols="10" required ></textarea>

                <label htmlFor="learningOutcomes">Learning Outcomes</label>
                <textarea className="form-control" {...register("discussionTopics")} rows="6" cols="10" required ></textarea>

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <label htmlFor="lectureSlide">Lecture Slide</label>
                <input className="form-control" type="file" {...register("lectureSlide")} />

                <br />

                <div className="text-center">
                    <button type="submit" class="btn btn-success">Success</button>
                </div>
            </form>
        </div>
    );
};

export default WeekInputByTeacher;