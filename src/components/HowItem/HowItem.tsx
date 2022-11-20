import "./HowItem.scss";
import createImg from "../../assets/images/work-items/hw-create.svg";
import telImg from "../../assets/images/work-items/hw-tel.svg";

export const HowItem = () => {
    return (
        <div className="how-works-item row">
            <div className="left col-lg-6 col-12">
                <img src={ createImg } width="100%" className="desktop-img" alt="item"></img>
                <img src={ telImg } className="d-none mobile-img" alt="item"></img>
            </div>
            <div className="right col-lg-6 col-12 d-flex">
                <div className="text-content">
                    <h3 className="orange">Create Account</h3>
                    <h2>Create/login to an existing account to get started</h2>
                    <h4>
                        An account is created with your email and a desired password
                    </h4>
                </div>
            </div>
        </div>
    );
};