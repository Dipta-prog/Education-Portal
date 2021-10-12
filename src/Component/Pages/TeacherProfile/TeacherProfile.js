import React from 'react';
import TeacherSidebar from '../../Shared/TeacherSidebar/TeacherSidebar';
import './TeacherProfile.scss';

const TeacherProfile = () => {
    return (
        <>
            
            <div className="row">
                <div className="col-md-3">
                <TeacherSidebar />
                </div>
                <div className="col-md-9">
                    <h1>This is joti</h1>
                </div>
            </div>
        </>
    );
};

export default TeacherProfile;