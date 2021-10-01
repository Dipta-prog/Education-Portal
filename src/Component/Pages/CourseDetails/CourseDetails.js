import React from 'react';
import welcomeBanner from '../../../Media/img/Welcome-banner/Welcome.JPG';
import Navbar from '../../Shared/Navbar/Navbar';
import Weekly from '../Weekly/Weekly';
import './CourseDetails.scss';

const CourseDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="courseDetailsHeader">
                <h3>Computer Networks</h3>
                <p><a href="#dashboard">Dashboard</a> / <a href="#myCourses">My Courses</a> / <a href="#aboutThisCourse">About this course</a></p>
            </div>
            <div className="full-page">
                <h5>Welcome to Computer Networks</h5>
                <div className="outlineFix ml-4">

                    <h4>Basic Information</h4>
                    <div className="basicInformation">
                        <p>Course Code:</p>
                        <p>Program:</p>
                        <p>Faculty</p>
                        <p>Semester</p>
                        <p>Course Category</p>
                    </div>

                    <h4>Course Information</h4>
                    <div className="courseInstructor">
                        <p>Teacher Name:</p>
                        <p>Office Room</p>
                        <p>Cell Number: </p>
                        <p>Email:</p>
                    </div>

                    <h4>Course Outline</h4>
                    <div className="courseInstructor">
                        <p>This is course outline</p>
                    </div>

                    <h4>Textbook</h4>
                    <div className="courseInstructor">
                        <p>This is text book</p>
                    </div>

                    <h4>Guideline</h4>
                    <div className="courseInstructor">
                        <p>This is text book</p>
                    </div>

                    <h4>Announcement</h4>
                    <div className="courseInstructor">
                        <p>This is text book</p>
                    </div>
                </div>

                <div>
                    <img src={welcomeBanner} alt="" />
                    <h5>Believe in your infinite potential. Your only limitations are those you set upon yourself. Believe in yourself, your abilities and your own potential. Never let self-doubt hold you captive. You are worthy of all that you dream of and hope for.</h5>
                    <a href="">Student Survey of the course</a>


                    <Weekly />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
