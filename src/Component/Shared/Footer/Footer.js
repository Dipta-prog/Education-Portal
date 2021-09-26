import React from 'react';
// import logo from '../../Images/education-portal-logo.jpg';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="text-center text-decoration-none text-lg-start footer-bg text-white mt-4">
            <section className="pt-5">
                <div className="container text-md-start">

                    <div className="row">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fa fa-gem me-3"><img src={logo} alt="" height="60px" /></i>
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem rerum nostrum delectus
                                officiis eligendi quibusdam numquam nulla id hic dolores autem, incidunt corporis pariatur.
                            </p>
                        </div>


                        <div className="row col-md-5">

                            <div className="col-md-5 col-sm-6 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase text-yellow fw-bold mb-4">
                                    Office
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">Contact</a>
                                </p>

                            </div>



                            <div className="col-md-7 col-sm-6 mx-auto mb-4">
                                {/* useful Links  */}
                                <h6 className="text-uppercase text-yellow fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">Terms & Conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">FaQ</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset deco-remove">Help</a>
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

                </div>
            </section>

            {/* Section: Social media */}
            <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="#facebook" className="me-4 text-reset">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#twitter" className="me-4 text-reset">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#google" className="me-4 text-reset">
                        <i className="fa fa-google"></i>
                    </a>
                    <a href="#instagram" className="me-4 text-reset">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#linkedin" className="me-4 text-reset">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#github" className="me-4 text-reset">
                        <i className="fa fa-github"></i>
                    </a>
                </div>

            </section>


            {/* Copyright  */}
            <div className="text-center p-4" style={{ backgroundColor: "#101010" }}>
                © 2021 Copyright:
                <a className="text-yellow fw-bold" href="#home">Education portal</a>
            </div>

        </footer>
    );
};

export default Footer;