import React from 'react';
import Final from '../../../Media/img/Midterm/FinalExam.jpg';
import './FinalExam.scss';

const FinalExam = () => {
    return (
        <div style={{paddingTop: '4rem'}}>
            <div style={{ textAlign: 'center' }}>
                <img className="finalCoverPic" src={Final} alt="" />
            </div>
            <h6>Exam Guideline</h6>
           
            <h6>Final Exam</h6>
            <p>Student Survey of the Course</p>
        </div>
    );
};

export default FinalExam;