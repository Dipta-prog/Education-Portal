import { animated, useTrail } from "@react-spring/web";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
//
import useMeasure from "react-use-measure";
import styles from "../Component/Home/Home/styles.module.css";


const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

//
const InputTest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://education-portal-1.herokuapp.com/inputTest", data)

      .then((data) => {
        console.log("new", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /////

  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };
  /////
  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <br /> <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <br />
        <input type="submit" />
      </form> */}
      <div className={styles.container}>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className={styles.hooksMain}
          onMouseMove={handleMouseMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputTest;
