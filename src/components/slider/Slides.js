import React from "react";
import "./Slider.css"

const slidesInfo = [
    {
        src: `${process.env.PUBLIC_URL}/media/Cafe2.png`,
        alt: "Cafe",
        desc: "Coffe Pack",
    },
    {
        src: `${process.env.PUBLIC_URL}/media/Befeater.png`,
        alt: "Befeater",
        desc: "Gin Tonic Pack",
    },
    {
        src: `${process.env.PUBLIC_URL}/media/RonMedellin.png`,
        alt: "RonMedellin",
        desc: "Ron Pack",
    },
    {
        src: `${process.env.PUBLIC_URL}/media/GatoYRocher.png`,
        alt: "Vino",
        desc: "Vino Pack",
    },
    {
        src: `${process.env.PUBLIC_URL}/media/Jameson.png`,
        alt: "Whisky",
        desc: "Whisky Pack",
    },
]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;