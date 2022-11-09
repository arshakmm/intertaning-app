import React from "react";
// import Header from "../Header/Header";
import style from './Tasks.module.css'
import store from "../../ImageStore/store";
import vector from "../icon/Group1.svg";
const Tasks = () => {

    



    return (
        <div className={style.c}>
        <div className={style.container}>
          <div className={style.app}>Taks</div>
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
                        <div className={style.ilus}>Exercises</div>
                        <div className={style.lesson}>7 lessons</div>
                        <div className={style.min}>112 min</div>
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
          {store.tsaks.tPopular.map((index) => (
            <div className={style.hhh}>
              <div>
                <img className={style.img} src={index.src} title={index.title} />
                <div className={style.ilus}>Exercises</div>
                <div className={style.lesson}>7 lessons</div>
                <div className={style.min}>112 min</div>
                <img className={style.vector} src={vector} alt="vec" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Tasks