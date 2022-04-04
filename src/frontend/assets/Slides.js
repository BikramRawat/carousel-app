import React from 'react';
import "../styles/slides.scss";

const Slides = ({body})=> {
    return (
        <>
        <div className="slides-container">
            <div className="slides">
                <div className="content">
                    <img src={require('../assets/comma.png')} height={38} width={56} alt="comma"/>
                </div>
                <div className="content">
                    <h3>{body}</h3>

                </div>
                <div className="content">
                <img src={require('../assets/burger.png')} height={50} width={50} alt="burger"/>
                </div>
                <div className="content">
                    <p>The whole team @</p>
                    <p>The Pancake Collective<sup>TM</sup></p>
                </div>
                </div>
        </div>
        </>
    )

}
export default Slides;