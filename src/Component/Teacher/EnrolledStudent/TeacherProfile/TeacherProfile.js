import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import React, { useContext } from 'react';
import { UserLoggedinContext } from '../../../../App';
import TeacherImage from '../../../Media/img/TeacherProfile/teacherProfile.jpeg';
import TeacherSidebar from '../../../Shared/TeacherSidebar/TeacherSidebar';
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
                        {/* <div className="row">
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
                    </div> */}

                        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-8">
                            <div className="row">
                                <div className="col-md-3">
                                    <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={TeacherImage} alt="" width="384" height="512" />

                                    <div className="py-3 d-flex justify-content-between">
                                        <a href="">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>

                                        <a href=""><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p class="text-lg font-semibold">
                                                “Tailwind CSS is the only framework that I've seen scale
                                                on large teams. It’s easy to customize, adapts to any design,
                                                and the build size is tiny.”
                                            </p>
                                        </blockquote>
                                        <figcaption class="font-medium">
                                            <div class="text-cyan-600">
                                                Sarah Dayan
                                            </div>
                                            <div class="text-gray-500">
                                                Staff Engineer, Algolia
                                            </div>
                                        </figcaption>

                                        <div className="m-10 p-10">
                                            <h6>Departments and Institution</h6>
                                            <p>CSE</p>

                                            <h6>Location</h6>
                                            <p>Dhaka</p>

                                            <h6>Qualifications</h6>
                                            <p>MSC in JU</p>

                                            {/* <h6>Qualifications</h6>
                                            <p>MSC in JU</p>

                                            <h6>Qualifications</h6>
                                            <p>MSC in JU</p>

                                            <h6>Qualifications</h6>
                                            <p>MSC in JU</p>

                                            <h6>Qualifications</h6>
                                            <p>MSC in JU</p> */}
                                        </div>
                                    </div>

                                    <div className="third-part">

                                    </div>
                                </div>
                            </div>
                        </figure>

                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                            <Fab color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </Box>

                    </div>
                </div>
            </> : <div className="m-5 p-5">
                <div className="text-danger text-center p-5 m-5"> <h4 className="text-danger p-5 m-5" >You are not authorized for this route</h4></div>
            </div>
    );
};

export default TeacherProfile;