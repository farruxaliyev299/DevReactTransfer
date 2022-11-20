import "../HomePage/HomePage.scss";
import "./Header.scss";
import logo from "../../assets/images/logo/BellaOlonjeLogo.svg";
import { NavLink } from "../../components/NavLink/NavLink";

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
                    <NavLink href="#" isOrange={true} title="Home"/>
                    <NavLink href="#" isOrange={false} title="Product"/>
                    <NavLink href="#" isOrange={false} title="Faq"/>
                    <NavLink href="#" isOrange={false} title="Contact"/>
                </nav>
                <img src="./assets/images/logo/hamburger.svg" alt="hamburger icon" className="d-none hamburger"></img>
            </div>
        </div>
    );
};