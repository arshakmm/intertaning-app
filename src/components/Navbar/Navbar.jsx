import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import icon1 from "./icon/icon1.svg";
import icon2 from "./icon/icon2.svg";
import icon3 from "./icon/icon3.svg";

let Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.conainer}>
        <div className={`${style.active}`}>
          <NavLink to="/courses" activeclassname={style.activeLink}>
            <img src={icon1} alt="courses" />
          </NavLink>
        </div>
        <div className={` ${style.active}`}>
          <NavLink to="/tasks" activeclassname={style.activeLink}>
            <img src={icon2} alt="tasks" />
          </NavLink>
        </div>
        <div className={` ${style.active}`}>
          <NavLink to="/population" activeclassname={style.activeLink}>
            <img src={icon3} alt="populatio" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
