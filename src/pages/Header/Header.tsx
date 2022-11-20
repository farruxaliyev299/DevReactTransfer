import "../HomePage/HomePage.scss";
import "./Header.scss";
import logo from "../../assets/images/logo/BellaOlonjeLogo.svg";

export const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="left">
                    <div className="image-wrapper">
                        <img src={logo} alt="site logo"></img>
                    </div>
                </div>
                <nav className="right desktop-menu">
                    <a href=" " className="nav-link active">Home</a>
                    <a href=" " className="nav-link">Product</a>
                    <a href=" " className="nav-link">Faq</a>
                    <a href=" " className="nav-link">Contact</a>
                </nav>
                <img src="./assets/images/logo/hamburger.svg" alt="hamburger icon" className="d-none hamburger"></img>
            </div>
        </div>
    );
};