import React from 'react';
import './Assign.scss';

const Assign = () => {
    return (
        <>
            <div className="assign">

                <h2>Final Assessment</h2>

                <div className="instruction">
                    <p>Please download the question paper below and submit your answer script here.
                        As instructed by the examination committee, No extra time will be given for submission.</p>
                        <p>Question File</p>
                </div>

                <div className="submission">
                    <div className="submissionStatus">
                        <h6 className="submissionStatusHeadline">Submission status</h6>
                        <p>No attempt</p>
                    </div>

                    <div className="gradingStatus">
                        <h6 className="gradingStatusHeadline">Grading status</h6>
                        <p>Not graded</p>
                    </div>

                    <div className="timeRemaining">
                        <h6 className="timeRemainingHeadline">Time remaining</h6>
                        <p></p>
                    </div>

                    <div className="submittedFile">
                        <h6 className="submittedFileHeadline">Submitted file</h6>
                        <p>File</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Assign;