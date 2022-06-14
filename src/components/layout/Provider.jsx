import { GameProvider } from "../game/GameContext.jsx";

import App from "./App.jsx";

function Provider() {
    return (
        <GameProvider>
            <App />
        </GameProvider>
    );
}

export default Provider;
