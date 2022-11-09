import React from "react";
// import Header from "../Header/Header";
import style from "./Population.module.css";
import store from "../../ImageStore/store";
import vector from "../icon/Group1.svg";

const Population = () => {
  return (
    <div className={style.c}>
    <div className={style.container}>
      <div className={style.app}>Population</div>
      <div className={style.butns}>
        {/* <button
          className={style.btn1}
          onClick={() =>
            setPhoto(
              store.population.pPopular.map((index) => (
                <div className={style.hhh}>
                  <div>
                    <img
                      className={style.img}
                      src={index.src}
                      title={index.title}
                    />
                    <div className={style.ilus}>Designe</div>
                    <div className={style.lesson}>18 lessons</div>
                    <div className={style.min}>158 min</div>
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
      {store.population.pPopular.map((index) => (
        <div className={style.hhh}>
          <div>
            <img className={style.img} src={index.src} title={index.title} />
            <div className={style.ilus}>Designe</div>
            <div className={style.lesson}>18 lessons</div>
            <div className={style.min}>158 min</div>
            <img className={style.vector} src={vector} alt="vec" />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Population;
