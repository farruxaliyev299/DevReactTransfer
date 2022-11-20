import "./DownloadApp.scss";
import footerImg from "../../assets/images/background/footer-bg.svg";

export const DownloadApp = () => {
    return (
        <section id="download-app">
            <div className="download-wrapper">
                <img src={ footerImg } alt="background" width="100%"></img>
                <div className="text-content">
                    <h2>Download the app now</h2>
                    <h4>Available on your favorite store. Start your premium experience now</h4>
                    <div className="download-buttons">
                        <div className="ps-button">
                            <a href=" ">Play Store</a>
                        </div>
                        <div className="ios-button">
                            <a href=" ">App Store</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};