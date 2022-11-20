import "./HowWorks.scss";
import { HowItem } from "../../components/HowItem/HowItem";
import { HowItemReversed } from "../../components/HowItem/HowItemReversed";


export const HowWorks = () => {
    return (
        <section id="how-works">
            <div className="how-works-header">
                <h3>How the app works</h3>
            </div>
            <div className="container">
                <HowItem />
                <HowItemReversed />
                <HowItem />
            </div>
        </section>
    );
};