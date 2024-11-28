import React from "react";
import style from "../styles/header.module.css";

const Header = () => {
    return(
        <div className={style.mainContainer}>
        <div className={style.navBarWrapper}>
            <div className={style.navBar}>
                <h1>MovieApp</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                </ul>
                <button className={style.btn}>Sign up</button>
            </div>
        </div>
        <form className={style.search}>
            {/* <input placeholder="search..." type="search" name="search" id="search"> */}
            <input
                type="search"
                name="search"
                placeholder="search..."
                className={style.input}
                required
            />       
        </form>

        <div class="movieMainContainer">
            {/* <div class="movie">
                    
            </div> */}
        </div>   
    </div>

    )
}

export default Header