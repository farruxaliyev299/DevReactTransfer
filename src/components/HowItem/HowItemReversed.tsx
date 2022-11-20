import "./HowItem.scss";
import createImg from "../../assets/images/work-items/hw-create.svg";
import telImg from "../../assets/images/work-items/hw-tel.svg";

export const HowItemReversed = () => {
    return (
        <div className="how-works-item row reversed">
            <div className="left col-lg-6 col-12">
                <img src={ createImg } width="100%" className="desktop-img" alt="item"></img>
                <img src={ telImg } className="d-none mobile-img" alt="item"></img>
            </div>
            <div className="right col-lg-6 col-12 d-flex">
                <div className="text-content">
                    <h3 className="orange">Explore varieties</h3>
                    <h2>Shop for your favorites meal as e dey hot.</h2>
                    <h4>
                        Shop for your favorite meals or drinks and enjoy while doing it.
                    </h4>
                </div>
            </div>
        </div>
    );
};