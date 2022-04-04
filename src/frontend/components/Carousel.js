import React,{useEffect, useState} from 'react';
import Slides from '../assets/Slides';
import "../styles/Carousel.scss";

const Carousel =()=> {
const [currentItem, setCurrentItem]=useState(0);
const itemArray =[<div>An experience that makes us feel like we’re covered in maple syrup - <p>It’s a good thing</p></div>,
 "This piece of software is the shit, I’ve never tried anything like it.",
  "this is third slide",
   "this is fourth slide" ,
    "this is fifth slide"];
const itemArrayLength = itemArray.length;
const item= itemArray.slice(currentItem, currentItem + 1);

useEffect(()=> {
    setTimeout(nextItem,3000)
},[item]);

const prevItem=()=> {
    setCurrentItem(currentItem === 0 ? itemArrayLength-1 :currentItem-1);
}
const nextItem=()=> {
    setCurrentItem(currentItem === itemArrayLength-1 ? 0:currentItem+1);
}
if (!Array.isArray(itemArray) || itemArrayLength <= 0) {
    return null;
  }

    return (
        <div className="carousel-container">
               
                 (
                        <div key={item} className="carousel-item">
                            <Slides body={item}/>
                        </div>
                    )
                <button className="carousel-left" onClick={prevItem} >
                &larr;
                </button>
                <button className="carousel-right"onClick={nextItem}>
                &rarr;
                </button>
                <div className="container-lines">
                    {Array.from({length:5}).map((item,index) => {
                        return (
                            <div className={currentItem === index ? "lines-active":"lines"}
                            onClick={() => setCurrentItem(index)}
                            >
                        </div>
                        )}
                    )}
                </div>
        </div>
    )
}

export default Carousel;