import React from 'react';
import NoticePeriodImg from '../../../Media/img/Notice-Period.jpg';
import './NoticePeriod.scss'

const NoticePeriod = () => {
    return (
        <>
            <div>
                <div className="d-flex justify-content-center">
                    <div>
                        <h1 className='noticeHeading my-3 text-center'><big><b>Notice Board</b></big></h1>

                        <img src={NoticePeriodImg} className="img-fluid my-4" width='450px' alt="" />
                       

                        <form action="">
                            <label htmlFor=""><big>Add Your Notice</big></label>
                            <textarea className='form-control textarea-border' name="" id="" cols="30" rows="5"></textarea>

                            <button className="btn btn-success w-100 my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoticePeriod;