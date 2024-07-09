import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case "INITIALIZE":
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedIsLoggedIn && storedUser) {
            dispatch({
                type: "INITIALIZE",
                payload: { isLoggedIn: true, user: storedUser },
            });
        }
    }, []);

    const login = (username) => {
        const user = { name: username };
        dispatch({ type: "LOGIN", payload: user });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
