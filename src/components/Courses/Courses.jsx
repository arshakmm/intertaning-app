import React from "react";
import store from "../../ImageStore/store";
import style from "./Courses.module.css";
import { useState } from "react";
import Header from "../Header/Header";
import vector from "../icon/Group1.svg";
const Courses = (props) => {
  const [photo, setPhoto] = useState(store);

  return (
    <div className={style.c}>
      <div className={style.container}>
        <div className={style.app}>Courses</div>
        <div className={style.butns}>
          {/* <button
            className={style.btn1}
            onClick={() =>
              setPhoto(
                store.curses.cPopular.map((index) => (
                  <div className={style.hhh}>
                    <div>
                      <img
                        className={style.img}
                        src={index.src}
                        title={index.title}
                      />
                      <div className={style.ilus}>Illustration</div>
                      <div className={style.lesson}>24 lessons</div>
                      <div className={style.min}>134 min</div>
                      <img className={style.vector} src={vector} alt="vec" />
                    </div>
                  </div>
                ))
              )
            }
          >
            Popular
          </button> */}
           <button className={style.btn1}>Popular</button>
          <button className={style.btn2}>Favorite</button>
          <button className={style.btn3}>New</button>
        </div>
        {store.curses.cPopular.map((index) => (
          <div className={style.hhh}>
            <div>
              <img className={style.img} src={index.src} title={index.title} />
              <div className={style.ilus}>Illustration</div>
              <div className={style.lesson}>24 lessons</div>
              <div className={style.min}>134 min</div>
              <img className={style.vector} src={vector} alt="vec" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
