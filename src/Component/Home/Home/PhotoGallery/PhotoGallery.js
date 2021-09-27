import React from "react";
import "./PhotoGallery.scss";
import img1 from "../../../../Media/img/Home-Img/photo-gallery/1.jpg";
import img2 from "../../../../Media/img/Home-Img/photo-gallery/2.jpg";
import img3 from "../../../../Media/img/Home-Img/photo-gallery/3.jpg";
import img4 from "../../../../Media/img/Home-Img/photo-gallery/4.jpg";
import img5 from "../../../../Media/img/Home-Img/photo-gallery/5.jpg";
import img6 from "../../../../Media/img/Home-Img/photo-gallery/6.jpg";
import img7 from "../../../../Media/img/Home-Img/photo-gallery/7.jpg";
import img8 from "../../../../Media/img/Home-Img/photo-gallery/8.jpg";
import { FaSearchPlus } from "react-icons/fa";
const photogallery = [
  {
    img: img1,
    title: "Catagory",
  },
  {
    img: img2,
    title: "Catagory",
  },
  {
    img: img3,
    title: "Catagory",
  },
  {
    img: img4,
    title: "Catagory",
  },
  {
    img: img5,
    title: "Catagory",
  },
  {
    img: img6,
    title: "Catagory",
  },
  {
    img: img7,
    title: "Catagory",
  },
  {
    img: img8,
    title: "Catagory",
  },
];
const PhotoGallery = () => {
  return (
    <section className="container">
      <div className="all_section_header_title">
        <big>
          PHOTO <span>GALLERY</span>
        </big>{" "}
        <div className="lines">
          <div className="lines1"></div>
          <div className="lines2"></div>
          <div className="lines3"></div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "5%" }}>
        {photogallery.map((photos, i) => (
          <div
            key={i}
            className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"
            style={{
              paddingBottom: "1%",
              paddingLeft: "1%",
              paddingRight: "1%",
              paddingTop: "1%",
            }}
          >
            <div className="photo-frame">
              <div className="photo">
                <img src={photos.img} alt="" style={{ width: "100%" }} />
              </div>
              <div className="photo-details">
                <p>Catagory</p>
                <span>Product Name</span>
                <div className="border_gallery"></div>
                <FaSearchPlus id="gellery_search_icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
