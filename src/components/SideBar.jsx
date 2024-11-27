import React from "react";
import style from "../styles/sideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
    return(
        <div className={style.sideBarContainer}>
            <Link to={"/movie/popular"}><button><p>Popular</p></button></Link>
            <Link to={"/movie/upcoming"}><button><p>Upcoming</p></button></Link>
            <Link to={"/movie/now_playing"}><button><p>Top-Rated</p></button></Link>
            <Link to={"/movie/top_rated"}><button><p>Now Playing</p></button></Link>
        </div>
    )
}

export default SideBar