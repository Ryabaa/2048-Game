import { useState, useEffect } from "react";

import Score from "./Score";
import Nav from "./Nav";

function End() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    });

    return (
        <div className={active ? "end end--active" : "end"}>
            <div className="end__container">
                <h2 className="end__text">Game over</h2>
                <Score />
                <Nav />
            </div>
        </div>
    );
}

export default End;
