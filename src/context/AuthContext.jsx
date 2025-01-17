import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext();

const initialState = {
    isLoggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (username, password) => {
        try {
            const response = await axiosInstance.post("/auth/signin", {
                username,
                password,
            });

            const token = response.data;
            const user = { name: "Adityae" };
            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("isLoggedIn", true);
                dispatch({ type: "LOGIN", payload: token });
                // return true;
            }
        } catch (error) {
            console.log("🚀 ~ login failed ~ error:", error);
            throw error;
        }
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
