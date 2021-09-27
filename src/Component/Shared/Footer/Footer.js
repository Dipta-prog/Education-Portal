import React from 'react';
// import logo from '../../Images/education-portal-logo.jpg';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="text-decoration-none footer-bg text-white">
            <div className="pt-5 px-2">
                <div className="container">

                    <div className="row">

                        <div className="col-md-3 col-lg-4">

                            <h6 className="text-uppercase fw-bold ">
                                <i className="fa fa-gem me-3"><img src={logo} alt="" className="footer-logo" /></i>
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem rerum nostrum delectus
                                officiis eligendi quibusdam numquam nulla id hic dolores autem, incidunt corporis pariatur.
                            </p>
                        </div>


                        <div className="row col-md-5">

                            <div className="col-md-6 col-sm-6 col-6 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase text-yellow fw-bold mb-4">
                                    Office
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Contact</a>
                                </p>

                            </div>



                            <div className="col-md-6 col-sm-6 col-6 mx-auto mb-4">
                                {/* useful Links  */}
                                <h6 className="text-uppercase text-yellow fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Terms & Conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">FaQ</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase text-yellow fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fa fa-home me-3"></i> Anandabazar, SY 1001, Dhaka</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                devzone302.2@gmail.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print me-3"></i> + 85 255 568 89</p>
                        </div>

                    </div>
                    
                    {/* Section: Social media */}
                    <div className="text-center row border-bottom py-3">

                        <div className=" col-md-6">
                            <span>Get connected with us</span>
                        </div>



                        <div className="col-md-6">
                            <a href="" className="me-4 text-reset">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a href="" className="me-4 text-reset">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fa fa-linkedin"></i>
                            </a>

                        </div>

                    </div>
                </div>
               
            </div>
 {/* Copyright  */}
                    <div className="text-center p-4" style={{ backgroundColor: "#101010" }}>
                        © 2021 Copyright:
                        <span className="text-yellow fw-bold" href="#"> Education portal</span>
                    </div>



        </footer>
    );
};

export default Footer;