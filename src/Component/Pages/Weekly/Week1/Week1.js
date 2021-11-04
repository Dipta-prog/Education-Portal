import React from "react";
import "./Week.scss";
import { FaCheck } from "react-icons/fa";
const Week1 = () => {
  return (
    <div className="week1">
      <h5>Week 1 : </h5>

      <big>Introduction to computer networks</big>

      <div className="lectureMaterials">
        <p>Lesson 1</p>

        <div style={{ display: "flex" }}>
          <h6>Discussion Topics</h6>
          <ul>
            <li>
              <FaCheck
                style={{
                  display: "inline",
                  marginRight: "3%",
                  color: "#3189b3",
                }}
              />
              Introduction
            </li>
            <li>
              <FaCheck
                style={{
                  display: "inline",
                  marginRight: "3%",
                  color: "#3189b3",
                }}
              />
              Architecture of computer networks
            </li>
            <li>
              <FaCheck
                style={{
                  display: "inline",
                  marginRight: "3%",
                  color: "#3189b3",
                }}
              />
              Classification of networks
            </li>
            <li>
              <FaCheck
                style={{
                  display: "inline",
                  marginRight: "3%",
                  color: "#3189b3",
                }}
              />
              All the best
            </li>
          </ul>
        </div>
        <br />
        <br />
        <h6>Learning Outcomes</h6>
        <ul>
          <li>Overview of computer networks</li>
          <li>Architecture of computer networks</li>
          <li>Classification of networks</li>
          <li>All the best</li>
        </ul>

        <p>
          <a href="">Lecture Slide</a>
        </p>

        <h6>Lecture Video</h6>

        <div className="text-center">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Week1;
