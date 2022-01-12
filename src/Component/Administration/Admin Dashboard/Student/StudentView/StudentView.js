import React from 'react';
import studentImage from '../../../../../Media/img/Home-Img/photo-gallery/1.jpg';

const StudentView = () => {
    return (
        <div className="component-bg-color">
            
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="page-title">Student Details!</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Details of <span>Shammi</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 border border-0 shadow-lg bg-white p-3">
                        <div className="row d-flex justify-content-center align-items-center text-dark">
                            <div className="col-md-6">
                                <img src={studentImage} className="border rounded-1" alt="" MaxHeight="150px" width="100%" />
                            </div>
                            <div className="col-md-6">
                                <p>Name: <strong>Shammi Akther</strong> </p>
                                <p>Department: <strong>CSE</strong></p>
                                <p>Batch: <strong>Cse-25</strong></p>
                                <p>Mobile: <strong>+880123456789</strong></p>
                                <p>Email: <strong>shammiAkther@gmail.com</strong></p>
                                <p>Gender: <strong>Female</strong></p>
                                <p>DOB: <strong>01 june, 1995</strong></p>

                            </div>
                        </div>
                        <div className="mt-4 text-dark">
                            <p>Permanent Address: <strong>1280, Estern Avenue, Courtage area, Dhaka</strong></p>
                            <p>Present Address: <strong>1280, Bangabandhu Avenue, Courtage area, Dhaka</strong></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default StudentView;