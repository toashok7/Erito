import React from "react";
import { Link } from "react-router-dom";
import BGImg from "../../assets/img/bg/footer-bg.png";
import logo from "../../assets/img/logo/EritoOrange_Transparent.png";

const Main = () => {
    return (
        <>
            <footer className="footer-bg footer-p">
                <div
                    className="footer-top  pt-40 pb-05"
                    style={{
                        background_color: "#644222",
                        backgroundImage: `url(${BGImg})`,
                    }}
                >
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title mb-10">
                                        <img src={logo} alt="img" />
                                    </div>
                                    <div className="f-contact">
                                        <ul>
                                            <li>
                                                <i className="icon fal fa-phone"></i>
                                                <span>
                                                    (+91)0124-4226000 , (+91)
                                                    9971-600-130
                                                </span>
                                            </li>
                                            <li>
                                                <i className="icon fal fa-envelope"></i>
                                                <span>
                                                    <Link to="#">
                                                        info@EritoHospitality.com
                                                    </Link>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="icon fal fa-map-marker-check"></i>
                                                <span>
                                                    DLF City, Gurgaon, haryana
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2>Quick Links</h2>
                                    </div>
                                    <div className="footer-link">
                                        <ul>
                                            <li>
                                                <Link to="/about">
                                                    {" "}
                                                    About Us
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">
                                                    {" "}
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    {" "}
                                                    Term & Conditions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget mb-10">
                                    <div className="f-widget-title">
                                        <h2>Subscribe To Newsletter</h2>
                                    </div>
                                    <div className="footer-link">
                                        <div
                                            className="subricbe p-relative"
                                            data-animation="fadeInDown"
                                            data-delay=".4s"
                                        >
                                            <form
                                                action="news-mail.php"
                                                method="post"
                                                className="contact-form "
                                            >
                                                <input
                                                    type="text"
                                                    id="email2"
                                                    name="email2"
                                                    className="header-input"
                                                    placeholder="Your Email..."
                                                    required
                                                />
                                                <button className="btn header-btn">
                                                    {" "}
                                                    <i className="fas fa-location-arrow"></i>{" "}
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                Copyright &copy; Erito Hospitality 2023. All
                                rights reserved.
                            </div>
                            <div className="col-lg-6 col-md-6 text-right text-xl-right">
                                <div className="footer-social">
                                    <Link to="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Main;
