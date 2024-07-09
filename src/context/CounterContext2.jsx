import { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCOunt] = useState(0);

    const increment = () => {
        setCOunt((count) => count + 1);
    };

    const decrement = () => {
        setCOunt((count) => count - 1);
    };

    return (
        <CounterContext.Provider value={{ state, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);
