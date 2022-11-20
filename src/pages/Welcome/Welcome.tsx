import React from "react";
import "../HomePage/HomePage.scss";
import "./Welcome.scss";
import background from "../../assets/images/background/background.svg";
import background2 from "../../assets/images/background/background-2 (1).webp";
import leftIcon from "../../assets/images/icons/left-icon.svg";
import rightIcon from "../../assets/images/icons/right-icon.svg";
import rightPhone from "../../assets/images/background/right-phone.svg";

interface ICarouselProps {
    id: number;
    src: string;
}

export const Welcome = () => {
    const [currentVal,setCurrentVal] = React.useState(0);
    const carouselBgs : ICarouselProps[] = [
        {
            id: 1,
            src: { background }.background,
        },
        {
            id: 2,
            src: { background2 }.background2,
        }
    ]
    let currentSlide = carouselBgs[currentVal] !== undefined ? carouselBgs[currentVal] : carouselBgs[0];
    function rightButtonHandler(){
        carouselBgs[currentVal+1] ? setCurrentVal(prevVal => prevVal + 1) : setCurrentVal(0);
    }

    function leftButtonHandler(){
        carouselBgs[currentVal-1] ? setCurrentVal(prevVal => prevVal - 1) : setCurrentVal(carouselBgs.length-1);
    }

    return (
        <section id="welcome">
            <div className="welcome-wrapper">
                    <div className="carousel"><img src={currentSlide.src} id="welcome-background" alt="background" key={currentSlide.id}></img></div>
                    {/* <div className="carousel"><img src={ background } alt="background" id="welcome-background" className="active"></img><img src={ background2 } className="d-none" alt="background"></img></div> */}
                    <div className="welcome-border d-flex">
                        <img src={ leftIcon } className="left-arrow" alt="icon" onClick={ leftButtonHandler }></img>
                        <div className="welcome-content">
                            <div className="text-content">
                                <p>Food App { currentVal }</p>
                                <h1>Why stay hungry when you can order from Bella Onojie</h1>
                                <h4>Download the bella onojes food app now on</h4>
                            </div>
                            <div className="download-buttons">
                                <div className="ps-button">
                                    <a href=" ">Playstore</a>
                                </div>
                                <div className="ios-button">
                                    <a href=" ">Appstore</a>
                                </div>
                            </div>
                        </div>
                        <img src={ rightIcon } className="right-arrow" alt="icon" onClick={ rightButtonHandler }></img>
                    </div>
                    <div className="phones-background">
                        <img src={ rightPhone } alt="phone left"></img>
                        <img src={ rightPhone } alt="phone right"></img>
                    </div>
            </div>
        </section>
    );
};