import React from "react";
import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="btn-success" onClick={() => setCount(count + 1)}>
                {" "}
                +{" "}
            </button>

            <p className="mx-4">{count}</p>

            <button className="btn-warning" onClick={() => setCount(count - 1)}>
                {" "}
                -{" "}
            </button>
        </div>
    );
}
