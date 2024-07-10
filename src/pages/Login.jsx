import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import animation from "../assets/animations/animation-login.json";
import Lottie from "lottie-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { isLoggedIn, login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            console.log("🚀 ~ handleLogin ~ password:", password);
            console.log("🚀 ~ handleLogin ~ username:", username);

            if (isLoggedIn) {
                navigate("/");
                console.log("🚀 ~ handleLogin ~ success:", success);
            } else {
                setErrorMessage("Invalid username or password");
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="container mt-2 d-flex justify-content-center">
            <div className="row">
                <div className="card-body">
                    <h5 className="card-title">Form Login</h5>
                    <h6 className="mb-2 text-body-secondary">
                        Masukkan email dan pasword anda
                    </h6>
                    <div className="d-flex justify-content-center my-3">
                        <span style={{ width: 200, height: 110 }}>
                            <Lottie animationData={animation} />
                        </span>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 mt-5 text-start">
                            <label
                                htmlFor="username"
                                className="form-label text-start"
                            >
                                Username
                            </label>
                            <input
                                name="username"
                                type="username"
                                className="form-control"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="example"
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <div id="emailHelp" className="form-text">
                                Pastikan email yang anda masukkan sudah benar
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>

                        <button type="submit" className="btn btn-primary mt-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
