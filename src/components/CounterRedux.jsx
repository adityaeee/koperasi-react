import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";

export default function CounterRedux() {
    // untuk mengambil data dari store
    // state.counter -> samakan namanya dengan yang di slice "name"
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div style={{ height: "50vh", marginTop: "150px" }}>
            <div>Value: {count}</div>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
