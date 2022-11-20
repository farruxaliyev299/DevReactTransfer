import "../HomePage/HomePage.scss";
import "./Welcome.scss";
import background from "../../assets/images/background/background.svg";
import background2 from "../../assets/images/background/background-2 (1).webp";
import leftIcon from "../../assets/images/icons/left-icon.svg";
import rightIcon from "../../assets/images/icons/right-icon.svg";
import rightPhone from "../../assets/images/background/right-phone.svg";

export const Welcome = () => {
    return (
        <section id="welcome">
            <div className="welcome-wrapper">
                    <div className="carousel"><img src={ background } alt="background" id="welcome-background" className="active"></img><img src={ background2 } className="d-none" alt="background"></img></div>
                    <div className="welcome-border d-flex">
                        <img src={ leftIcon } className="left-arrow" alt="icon"></img>
                        <div className="welcome-content">
                            <div className="text-content">
                                <p>Food App</p>
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
                        <img src={ rightIcon } className="right-arrow" alt="icon"></img>
                    </div>
                    <div className="phones-background">
                        <img src={ rightPhone } alt="phone left"></img>
                        <img src={ rightPhone } alt="phone right"></img>
                    </div>
            </div>
        </section>
    );
};