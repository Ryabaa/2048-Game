import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import { GameProvider } from "../game/GameContext.jsx";

function App() {
    return (
        <GameProvider>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </GameProvider>
    );
}

export default App;
