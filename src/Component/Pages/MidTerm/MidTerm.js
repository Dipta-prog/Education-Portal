import React from 'react';
import Midterm from '../../../Media/img/Midterm/midterm.jpg';
import './MidTerm.scss';

const MidTerm = () => {
    return (
        <div className="midTerm">
            <h3 className="title">Mid Term</h3>
            <div className="">
                <h6>There is nothing in this world that can hinder you from excelling if you allow confidence and determination to accompany you wherever you go. We, all believe the excellence, which you are going to achieve in your exams is only just the beginning of greater things in your life.
                    All the best.</h6>

                <div style={{ textAlign: 'center', margin: '4rem 0rem' }}>
                    <img className="midtermCoverPic" src={Midterm} alt="" />
                </div>

                <h6>Mid Term Syllabus:</h6>
                <ul>
                    <li>Introduction to Robotics</li>
                    <li>History of Robotics</li>
                    <li>Sensors and Applications</li>
                    <li>Actuators and Applications</li>
                    <li>Transformations</li>
                    <li>Inverse Transformations</li>
                </ul>


                <h6><small>Midterm Exam Guideline</small></h6>
                <h6><small>Midterm Exam</small></h6>


                <h6>Submission Link</h6>
                <small>done</small>
                <small>done</small>
            </div>
        </div>
    );
};

export default MidTerm;