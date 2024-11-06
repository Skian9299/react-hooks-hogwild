import React from "react";
import piggy from "../assets/porco.png";
import "./Nav.css"; // Import the corresponding CSS file for styling

const Nav = () => {
    return (
        <div className="navWrapper">
            {/* Header Text */}
            <span className="headerText">HogWild</span>

            {/* Piggy Image */}
            <div className="TwirlyPig">
                <img src={piggy} className="App-logo" alt="piggy" />
            </div>

            {/* Description Text */}
            <span className="normalText">
                A React App for County Fair Hog Fans
            </span>
        </div>
    );
};

export default Nav;
