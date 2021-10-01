import React from 'react';
import FinalExam from '../FinalExam/FinalExam';
import MidTerm from '../MidTerm/MidTerm';
import Week1 from './Week1/Week1';
import './Weekly.scss';

const Weekly = () => {
    return (
        <div className="weekly">
            <Week1 />
            <MidTerm />
            <FinalExam />
        </div>
    );
};

export default Weekly;