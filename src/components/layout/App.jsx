import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

import Header from "./Header.jsx";
import Start from "./Start.jsx";
import Game from "./Game.jsx";
import Footer from "./Footer.jsx";

function App() {
    const { gameState } = useContext(GameContext);

    return (
        <div className="App">
            <Header />

            {gameState === "start" && <Start />}
            {gameState === "game" && <Game />}
            {gameState === "end" && <Game />}

            <Footer />
        </div>
    );
}

export default App;
