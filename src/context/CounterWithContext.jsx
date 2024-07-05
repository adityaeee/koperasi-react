import React from "react";
import { useCounter } from "./CounterContext";

export default function CounterWIthContext() {
    const { state, dispatch } = useCounter();

    return (
        <div style={{ height: "50vh", marginTop: "150px" }}>
            <div>Value: {state.count}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>
        </div>
    );
}
