// import "./HomePage.scss"
import { Header } from "../Header/Header";
import { Welcome } from "../Welcome/Welcome";
import { HowWorks } from "../HowWorks/HowWorks";
import { DownloadApp } from "../DownloadApp/DownloadApp";
import { Footer } from "../Footer/Footer";

export const HomePage = () => {
    return (
        <div>
            <header className="App-header">
                <Header />
            </header>
            <main>
                <Welcome />
                <HowWorks />
                <DownloadApp />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};