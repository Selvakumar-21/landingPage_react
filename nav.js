import React from "react";

const Nav = () => {
    return(
        <nav>
            <div className="Title">
                <h2>Food Court</h2>
            </div>
            <div className="navigation">
                <a href="">Home</a>
                <a href="">Menu</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <button className="primary-button">Order Now</button>
            </div>
        </nav>
    );
}

export default Nav;