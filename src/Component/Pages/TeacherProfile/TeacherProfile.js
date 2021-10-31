import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserLoggedinContext } from '../../../App';
import TeacherImage from '../../../Media/img/TeacherProfile/teacherProfile.jpeg';
import TeacherSidebar from '../../Shared/TeacherSidebar/TeacherSidebar';
import './TeacherProfile.scss';

const TeacherProfile = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);

    return (
        loggedinUser.role === 'teacher' ?
        <>

            <div className="row">
                <div className="col-md-3">
                    <TeacherSidebar />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-3 m-5 p-5">
                            <div>
                                <img style={{borderRadius: "50%", width: "100%"}} src={TeacherImage} alt="" />
                            </div>
                            <div className="py-3 d-flex justify-content-between">
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>
                            
                                <a href=""><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            </div>
                        </div>
                        <div className="col-md-5 third-part">
                            <h6>Departments and Institution</h6>
                            <p>CSE</p>

                            <h6>Location</h6>
                            <p>Dhaka</p>

                            <h6>Qualifications</h6>
                            <p>MSC in JU</p>

                            <h6>Qualifications</h6>
                            <p>MSC in JU</p>

                            <h6>Qualifications</h6>
                            <p>MSC in JU</p>

                            <h6>Qualifications</h6>
                            <p>MSC in JU</p>
                            
                            <h6>Qualifications</h6>
                            <p>MSC in JU</p>
                        </div>
                    </div>
                </div>
            </div>
        </> : <div className="m-5 p-5">
                <div className="text-danger text-center p-5 m-5"> <h4 className="text-danger p-5 m-5" >You are not authorized for this route</h4></div>
            </div>
    );
};

export default TeacherProfile;