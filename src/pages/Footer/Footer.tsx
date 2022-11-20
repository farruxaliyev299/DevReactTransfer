import "./Footer.scss";
import logo from "../../assets/images/logo/BellaOlonjeLogo.svg";
import twitterIcon from "../../assets/images/icons/twitter-icon.svg";
import facebookIcon from "../../assets/images/icons/facebook-icon.svg";
import linkedinkIcon from "../../assets/images/icons/linkedin-icon.svg";

export const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="left">
                <div className="image-wrapper">
                    <img src={ logo } alt="site logo"></img>
                </div>
            </div>
            <div className="middle footer-icons">
                <a href=" ">
                    <img src={ twitterIcon } alt="twitter icon"></img>
                </a>
                <a href=" ">
                    <img src={ facebookIcon } alt="facebook icon"></img>
                </a>
                <a href=" ">
                    <img src={ linkedinkIcon } alt="twitter icon"></img>
                </a>
            </div>
            <div className="right">
                <p>Copywright 2020 Bella Onojie.com</p>
            </div>
        </div>
    );
}