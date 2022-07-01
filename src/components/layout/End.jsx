import { useState, useEffect } from "react";

import Score from "./Score";
import Nav from "./Nav";

const initialEndActive = false;

function End() {
    const [endActive, setEndActive] = useState(initialEndActive);

    useEffect(() => {
        setTimeout(() => {
            setEndActive(true);
        }, 1000);
    }, []);

    return (
        <div className={endActive ? "end end--active" : "end"}>
            <div className="end__container">
                <h2 className="end__text">Game over</h2>
                <Score />
                <Nav />
            </div>
        </div>
    );
}

export default End;
