import React from "react";
import style from "../styles/sideBar.module.css";
import { Link } from "react-router-dom";
import CustomButton from "../reusables/CustomButton";

const SideBar = () => {
    return(


        <div className={style.sideBarContainer}>
           
            <Link to={"/movie/popular"}><CustomButton style={style.btnside} type="submit" textContent="Popular"/></Link>
            <Link to={"/movie/upcoming"}><CustomButton style={style.btnside} type="submit" textContent="Upcoming"/></Link>
            <Link to={"/movie/now_playing"}><CustomButton style={style.btnside} type="submit" textContent="Now Playing"/></Link>
            <Link to={"/movie/top_rated"}><CustomButton style={style.btnside} type="submit" textContent="Top-Rated"/></Link>

        </div>
    )
}

export default SideBar