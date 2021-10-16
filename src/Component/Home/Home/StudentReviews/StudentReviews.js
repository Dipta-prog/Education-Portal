import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fstImg from "../../../../Media/img/Home-Img/student-review-img/download.jpg";
import "./StudentReviews.css";

const studentReviews = [
  {
    img: fstImg,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum!Lorem ipsum dolor sit, amet consectetur.",
    name: "Ariful Islam",
  },
  {
    img: fstImg,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum!Lorem ipsum dolor sit, amet consectetur.",
    name: "Ariful Islam",
  },
  {
    img: fstImg,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum!Lorem ipsum dolor sit, amet consectetur.",
    name: "Ariful Islam",
  },
  {
    img: fstImg,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum!Lorem ipsum dolor sit, amet consectetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, earum!Lorem ipsum dolor sit, amet consectetur.",
    name: "Ariful Islam",
  },
];
const StudentReviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section style={{ background: "#f6f6f6" }}>
      <div className="container">
        <div className="all_section_header_title">
          <big>
            OUR <span>STUDENT'S SAY</span>
          </big>{" "}
          <div className="lines">
            <div className="lines1"></div>
            <div className="lines2"></div>
            <div className="lines3"></div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, sunt!
          </p>
        </div>

        <Slider {...settings}>
          {studentReviews.map((review, i) => (
            <div key={i} className="students_reviews_container">
              <img src={review.img} alt="" />
              <p>{review.text}</p>
              <h6>{review.name}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StudentReviews;
