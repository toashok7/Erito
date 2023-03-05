import React, { useState } from "react";
import { Link } from "react-router-dom";

//All Images
//import BGImg from "../../assets/img/slider/slider_bg_02.jpg";
import BGImg from "../../assets/img/slider/LivingRoomDark.jpg";
import BGImg1 from "../../assets/img/slider/slider_bg_04.jpg";
//import BGTest from "../../assets/img/bg/testimonial-bg.png";
import BGTest from "../../assets/img/bg/propertyGreen.jpg";
//import BGVideo from "../../assets/img/bg/video-bg.png";
import BGVideo from "../../assets/img/bg/property.jpg";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import About from "../../assets/img/bg/an-img-02.png";
//import About1 from "../../assets/img/features/about_img_02.png";
import About1 from "../../assets/img/features/Gurgaon6.jpg";
import About2 from "../../assets/img/features/building2.jpg";
//import About2 from "../../assets/img/features/Gurgaon22.jpg";
import About3 from "../../assets/img/features/signature.png";
import Hotel from "../../assets/img/bg/an-img-01.png";
import Hotel1 from "../../assets/img/icon/fe-icon01.png";
import Hotel2 from "../../assets/img/icon/fe-icon04.png";
import Hotel3 from "../../assets/img/icon/fe-icon05.png";
import Hotel4 from "../../assets/img/icon/fe-icon06.png";
import Hotel5 from "../../assets/img/icon/fe-icon07.png";
import Hotel6 from "../../assets/img/icon/fe-icon08.png";
import service1 from "../../assets/img/gallery/bedroom1.jpg";
//import service2 from "../../assets/img/gallery/room-img02.png";
import service2 from "../../assets/img/gallery/living1.jpg";
import service3 from "../../assets/img/gallery/living4.jpg";
import service4 from "../../assets/img/gallery/living5.jpg";
import icon1 from "../../assets/img/icon/sve-icon1.png";
import icon2 from "../../assets/img/icon/sve-icon2.png";
import icon3 from "../../assets/img/icon/sve-icon3.png";
import icon4 from "../../assets/img/icon/sve-icon4.png";
import icon5 from "../../assets/img/icon/sve-icon5.png";
import icon6 from "../../assets/img/icon/sve-icon6.png";
import Resort from "../../assets/img/bg/an-img-02.png";
//import Resort1 from "../../assets/img/features/feature.png";
import Resort1 from "../../assets/img/features/buildings_many.jpg";
import pricing1 from "../../assets/img/bg/an-img-02.png";
import avatar1 from "../../assets/img/testimonial/testi_avatar.png";
import avatar2 from "../../assets/img/testimonial/testi_avatar_02.png";
import avatar3 from "../../assets/img/testimonial/testi_avatar_03.png";
import Aicon from "../../assets/img/testimonial/qt-icon.png";
import Aicon1 from "../../assets/img/testimonial/review-icon.png";
//import Booking from "../../assets/img/bg/booking-img.png";
import Booking from "../../assets/img/bg/booking.jpg";
import Play from "../../assets/img/bg/play-button.png";
//import Play from "../../assets/img/bg/property.jpg";
import Blog from "../../assets/img/bg/an-img-06.png";
//import Blog1 from "../../assets/img/blog/inner_b1.jpg";
import Blog1 from "../../assets/img/blog/building.jpg";
import Blog2 from "../../assets/img/blog/building.jpg";
import Blog3 from "../../assets/img/blog/building.jpg";
import Brand1 from "../../assets/img/brand/celebi.png";
import Brand2 from "../../assets/img/brand/cinepolis.png";
import Brand3 from "../../assets/img/brand/fujifilm.png";
import Brand4 from "../../assets/img/brand/lutron.jpg";
import Brand5 from "../../assets/img/brand/roki.png";
import Brand6 from "../../assets/img/brand/suzuki.png";
import Baani from "../../baani/Baani.js";

const Main = () => {
    const [yShow, setyShow] = useState();
    const [hShow, sethShow] = useState();
    const [animation, setanimation] = useState();

    const [toggler, setToggler] = useState(false);
    const [activeImage, setActiveImage] = useState(1);
    const [images, setImages] = useState([
        "assets/img/gallery/room-img01.png",
        "assets/img/gallery/room-img02.png",
        "assets/img/gallery/room-img03.png",
        "assets/img/gallery/room-img04.png",
        "assets/img/gallery/room-img05.png",
        "assets/img/gallery/room-img06.png",
    ]);

    const home = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const service = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonial = {
        initialIndex: 2,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const brand = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <main>
                <section id="home" className="slider-area fix p-relative">
                    <Slider className="slider-active" {...home}>
                        <div className="col-xl-2">
                            <div
                                className="single-slider slider-bg d-flex align-items-center"
                                style={{ backgroundImage: `url(${BGImg})` }}
                            >
                                <div className="container">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="slider-content s-slider-content mt-80 text-center">
                                                <h2
                                                    className={`${animation &&
                                                        "animation" &&
                                                        "fadeInUp"} `}
                                                    data-animation="fadeInUp"
                                                    data-delay=".4s"
                                                    style={{
                                                        animationDelay: "0.4s",
                                                    }}
                                                >
                                                    Enjoy A Luxuary Experience
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div
                                className="single-slider slider-bg d-flex align-items-center"
                                style={{
                                    backgroundImage: `url(${BGImg1})`,
                                    background_size: "cover",
                                }}
                            >
                                <div className="container">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="slider-content s-slider-content mt-80 text-center">
                                                <h2
                                                    data-animation="fadeInUp"
                                                    data-delay=".4s"
                                                    style={{
                                                        animationDelay: "0.4s",
                                                    }}
                                                >
                                                    Your Reliable Estate Agent
                                                    Partner
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                <section className="about-area about-p pt-60 pb-20 p-relative fix">
                    <div className="animations-02">
                        <img src={About} alt="contact-bg-an-02" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div
                                    className="s-about-img p-relative  wow fadeInLeft animated"
                                    data-animation="fadeInLeft"
                                    data-delay=".4s"
                                >
                                    <img src={About1} alt="img" />
                                    <div className="about-icon">
                                        <img src={About2} alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div
                                    className="about-content s-about-content  wow fadeInRight  animated pl-30"
                                    data-animation="fadeInRight"
                                    data-delay=".4s"
                                >
                                    <div className="about-title second-title pb-25">
                                        <h2>
                                            Largest provider of serviced
                                            apartments in Delhi NCR.
                                        </h2>
                                    </div>
                                    <p>
                                        Erito Hospitality is the largest
                                        provider of serviced apartments in
                                        GURGAON, with a growing portfolio of
                                        stylish, conveniently located residences
                                        in UNIWORLD CITY, ICON, BELAIRE, FRESCO,
                                        JMD GARDEN, RICHMOND PARK, PARK PLACE
                                        etc . Distinguished by their urban
                                        contemporary design and prime locations,
                                        our apartments provide a relaxing,
                                        residential retreat for business
                                        travelers on LONG-term assignment,
                                        out-of-town visitors or anyone desiring
                                        an authentic residential experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="service-details2"
                    className="pt-60 pb-40 p-relative"
                    style={{ background: "#f7f5f1" }}
                >
                    <div className="animations-01">
                        <img src={Hotel} alt="an-img-01" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title center-align mb-20 text-center">
                                    <h2>Our Services</h2>
                                    <p>
                                        We provide an affordable, comfortable,
                                        fully furnished, hassle free long-term
                                        housing solution to everyone from all
                                        over the globe. We are here to provide
                                        you with a home away from home.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                        <img src={Hotel3} alt="img" />
                                    </div>
                                    <div className="services-08-thumb">
                                        <img src={Hotel3} alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3>
                                            <Link to="/service-details">
                                                Corporate Leasing
                                            </Link>
                                        </h3>
                                        <p>
                                            Extensive portfolio of the
                                            ‘best-available’ properties.
                                        </p>
                                        <Link to="/service-details">
                                            Read More{" "}
                                            <i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                        <img src={Hotel1} alt="img" />
                                    </div>
                                    <div className="services-08-thumb">
                                        <img src={Hotel1} alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3>
                                            <Link to="/service-details">
                                                {" "}
                                                Service Apartments
                                            </Link>
                                        </h3>
                                        <p>
                                            Experts in providing serviced
                                            apartments in Delhi and Gurgaon
                                        </p>
                                        <Link to="/service-details">
                                            Read More{" "}
                                            <i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                        <img src={Hotel5} alt="img" />
                                    </div>
                                    <div className="services-08-thumb">
                                        <img src={Hotel5} alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3>
                                            <Link to="/service-details">
                                                Fully Furnished Flats
                                            </Link>
                                        </h3>
                                        <p>
                                            We undertake furnishing of flat with
                                            your budgets.
                                        </p>
                                        <Link to="/service-details">
                                            Read More{" "}
                                            <i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                        <img src={Hotel6} alt="img" />
                                    </div>
                                    <div className="services-08-thumb">
                                        <img src={Hotel6} alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3>
                                            <Link to="/service-details">
                                                Dedicated advisors
                                            </Link>
                                        </h3>
                                        <p>
                                            Dedicated team to help resolve all
                                            maintenance issues.
                                        </p>
                                        <Link to="/service-details">
                                            Read More{" "}
                                            <i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services-area pt-40 pb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12">
                                <div className="section-title center-align mb-50 text-center">
                                    <h2>Rooms & Suites</h2>
                                    <p>
                                        All our flat are located in full
                                        facility condominium and, as a resident,
                                        you will have access to the condo
                                        facilities like Pools, Gym ,Play ground,
                                        Swimming pool, club house , 24 Security
                                        etc
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Slider className="row services-active" {...service}>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-services mb-30">
                                    <div className="services-thumb">
                                        <Link
                                            to="#"
                                            className="gallery-link popup-image"
                                            onClick={() => {
                                                setToggler(!toggler);
                                                setActiveImage(1);
                                            }}
                                        >
                                            <img src={service1} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="services-content">
                                        <div className="day-book">
                                            <ul>
                                                <li>
                                                    <Link to="/contact">
                                                        Read More
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/room-details">
                                                Balcony Room
                                            </Link>
                                        </h4>
                                        <p>
                                            Fully furnished condominium with
                                            access to the condo facilities like
                                            Pools, Gym ,Play ground, Swimming
                                            pool, club house and 24 Security.
                                        </p>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <img
                                                        src={icon1}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon2}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon3}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon4}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon5}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon6}
                                                        alt="img"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-services mb-30">
                                    <div className="services-thumb">
                                        <Link
                                            to="#"
                                            className="gallery-link popup-image"
                                            onClick={() => {
                                                setToggler(!toggler);
                                                setActiveImage(2);
                                            }}
                                        >
                                            <img src={service2} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="services-content">
                                        <div className="day-book">
                                            <ul>
                                                <li>
                                                    <Link to="/contact">
                                                        Read More
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/room-details">
                                                Superior Double Room
                                            </Link>
                                        </h4>
                                        <p>
                                            Fully furnished condominium with
                                            access to the condo facilities like
                                            Pools, Gym ,Play ground, Swimming
                                            pool, club house and 24 Security.
                                        </p>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <img
                                                        src={icon1}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon2}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon3}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon4}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon5}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon6}
                                                        alt="img"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-services mb-30">
                                    <div className="services-thumb">
                                        <Link
                                            to="#"
                                            className="gallery-link popup-image"
                                            onClick={() => {
                                                setToggler(!toggler);
                                                setActiveImage(3);
                                            }}
                                        >
                                            <img src={service3} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="services-content">
                                        <div className="day-book">
                                            <ul>
                                                <li>
                                                    <Link to="/contact">
                                                        Read More
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/room-details">
                                                Super Balcony Double Room
                                            </Link>
                                        </h4>
                                        <p>
                                            Fully furnished condominium with
                                            access to the condo facilities like
                                            Pools, Gym ,Play ground, Swimming
                                            pool, club house and 24 Security.
                                        </p>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <img
                                                        src={icon1}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon2}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon3}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon4}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon5}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon6}
                                                        alt="img"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-services mb-30">
                                    <div className="services-thumb">
                                        <Link
                                            to="#"
                                            className="gallery-link popup-image"
                                            onClick={() => {
                                                setToggler(!toggler);
                                                setActiveImage(4);
                                            }}
                                        >
                                            <img src={service4} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="services-content">
                                        <div className="day-book">
                                            <ul>
                                                <li>
                                                    <Link to="/contact">
                                                        Read More
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/room-details">
                                                Delux Double Room
                                            </Link>
                                        </h4>
                                        <p>
                                            Fully furnished condominium with
                                            access to the condo facilities like
                                            Pools, Gym ,Play ground, Swimming
                                            pool, club house and 24 Security.
                                        </p>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <img
                                                        src={icon1}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon2}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon3}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon4}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon5}
                                                        alt="img"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src={icon6}
                                                        alt="img"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
                <section
                    className="feature-area2 p-relative fix"
                    style={{ background: "#f7f5f1" }}
                >
                    <div className="animations-02">
                        <img src={Resort} alt="contact-bg-an-05" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                                <div className="feature-img">
                                    <img
                                        src={Resort1}
                                        alt="img"
                                        className="img"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="feature-content s-about-content">
                                    <div className="feature-title pb-20">
                                        <h2>Our Mission</h2>
                                    </div>
                                    <p>
                                        We provide an affordable, comfortable,
                                        fully furnished, hassle free long-term
                                        housing solution to everyone from all
                                        over the globe. We are here to provide
                                        you with a home away from home.
                                    </p>
                                    <p>
                                        Our approach is based on
                                        professionalism, trust, and respect for
                                        the consumer. We have an able team of
                                        young and dynamic professionals having
                                        experienced skill sets to serve you
                                        better.
                                    </p>
                                    <div className="slider-btn mt-15">
                                        <Link
                                            to="/about"
                                            className="btn ss-btn smoth-scroll"
                                        >
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="pricing"
                    className="pricing-area pt-10 pb-60 fix p-relative"
                >
                    <div className="animations-01">
                        <img src={Hotel} alt="an-img-01" />
                    </div>
                    <div className="animations-02">
                        <img src={pricing1} alt="contact-bg-an-01" />
                    </div>
                </section>

                <section className="booking pt-10 pb-40 p-relative fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-bg02 ">
                                    <div className="section-title text-center">
                                        <h2>Book A Room</h2>
                                    </div>
                                    <form
                                        action="mail.php"
                                        method="post"
                                        className="contact-form mt-30"
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="contact-field p-relative c-name mb-20">
                                                    <label>
                                                        <i className="fal fa-badge-check"></i>{" "}
                                                        Check In Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="chackin2"
                                                        name="date"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="contact-field p-relative c-subject mb-20">
                                                    <label>
                                                        <i className="fal fa-times-octagon"></i>{" "}
                                                        Check Out Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="chackout2"
                                                        name="date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="contact-field p-relative c-subject mb-20">
                                                    <label>
                                                        <i className="fal fa-users"></i>{" "}
                                                        Adults
                                                    </label>
                                                    <select
                                                        name="adults"
                                                        id="adu2"
                                                    >
                                                        <option value="sports-massage">
                                                            Adults
                                                        </option>
                                                        <option value="1">
                                                            1
                                                        </option>
                                                        <option value="2">
                                                            2
                                                        </option>
                                                        <option value="3">
                                                            3
                                                        </option>
                                                        <option value="4">
                                                            4
                                                        </option>
                                                        <option value="5">
                                                            5
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="contact-field p-relative c-option mb-20">
                                                    <label>
                                                        <i className="fal fa-concierge-bell"></i>{" "}
                                                        Room
                                                    </label>
                                                    <select
                                                        name="room"
                                                        id="rm2"
                                                    >
                                                        <option value="sports-massage">
                                                            Room
                                                        </option>
                                                        <option value="1">
                                                            1
                                                        </option>
                                                        <option value="2">
                                                            2
                                                        </option>
                                                        <option value="3">
                                                            3
                                                        </option>
                                                        <option value="4">
                                                            4
                                                        </option>
                                                        <option value="5">
                                                            5
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="slider-btn mt-15">
                                                    <button
                                                        className="btn ss-btn"
                                                        data-animation="fadeInRight"
                                                        data-delay=".8s"
                                                    >
                                                        <span>Book Now</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="brand-area pt-40 pb-40"
                    style={{ background: "#f7f5f1" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12">
                                <div className="section-title center-align mb-50 text-center">
                                    <h2>Our Clients</h2>
                                </div>
                            </div>
                        </div>
                        <Slider className="row brand-active" {...brand}>
                            <div className="col-xl-1">
                                <div className="single-brand">
                                    <img src={Brand1} alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="single-brand">
                                    <img src={Brand2} alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="single-brand">
                                    <img src={Brand3} alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="single-brand">
                                    <img src={Brand4} alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="single-brand">
                                    <img src={Brand5} alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="single-brand">
                                    <img src={Brand6} alt="img" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </main>

            <FsLightbox
                toggler={toggler}
                sources={images}
                slide={activeImage}
            />

            {yShow && (
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div
                        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
                        tabIndex="-1"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button
                                        title="Close (Esc)"
                                        type="button"
                                        className="mfp-close"
                                        onClick={() => setyShow(false)}
                                    >
                                        ×
                                    </button>
                                    <iframe
                                        className="mfp-iframe"
                                        src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1"
                                        frameborder="0"
                                        allowFullScreen=""
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>
            )}
            {hShow && (
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div
                        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
                        tabIndex="-1"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button
                                        title="Close (Esc)"
                                        type="button"
                                        className="mfp-close"
                                        onClick={() => sethShow(false)}
                                    >
                                        ×
                                    </button>
                                    <iframe
                                        className="mfp-iframe"
                                        src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1"
                                        frameborder="0"
                                        allowFullScreen=""
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Main;
