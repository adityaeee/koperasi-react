import React from "react";
import { useState, useReducer, useEffect } from "react";
import { useTogle, useForm } from "../customHook/customHook";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 };

        default:
            break;
    }
};

export default function HookExample() {
    const [count, setCount] = useState(0);
    const [angka, setAngka] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    const [isTogled, togle] = useTogle();

    useEffect(() => {
        setAngka(Math.random(1, 2));
    }, [count, state.count]);

    // ======================================================
    const [values, handleChange, resetForm] = useForm({
        username: "",
        email: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", values);
        resetForm();
    };

    return (
        <div style={{ marginTop: "150px" }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label name="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label name="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Kirim</button>
                </div>
            </form>
        </div>
    );

    // return (
    //     <div className="mt-5" style={{ marginTop: "150px" }}>
    //         <button className="btn-success" onClick={() => setCount(count + 1)}>
    //             +
    //         </button>
    //         <h2>count yang naik {count}</h2>
    //         <h1>{angka}</h1>
    //         <button
    //             className="btn-success"
    //             onClick={() => dispatch({ type: "increment" })}
    //         >
    //             +
    //         </button>

    //         <p className="mx-4 mt-3">{state.count}</p>

    //         <button
    //             className="btn-warning"
    //             onClick={() => dispatch({ type: "decrement" })}
    //         >
    //             -
    //         </button>

    //         <div className="my-4">
    //             <button className="" style={{ width: "120px" }} onClick={togle}>
    //                 {isTogled ? "ON" : "OFF"}
    //             </button>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div className="mt-5" style={{ marginTop: "150px" }}>
    //         <button className="btn-success" onClick={() => setCount(count + 1)}>
    //             +
    //         </button>

    //         <p className="mx-4">{count}</p>

    //         <button className="btn-warning" onClick={() => setCount(count - 1)}>
    //             -
    //         </button>
    //     </div>
    // );
}
