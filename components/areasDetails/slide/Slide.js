import React, {useEffect, useState} from 'react';
import classes from "./slide.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

    let slider1;
    let slider2;
    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])

    return (
        <div className={classes.slide}>
            <Slider
                asNavFor={nav2}
                ref={slider => (slider1 = slider)}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};