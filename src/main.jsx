import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import HookExample from "./pages/HookExample.jsx";
import CounterRedux from "./components/CounterRedux.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Login from "./pages/Login.jsx";
import { CounterProvider } from "./context/CounterContext.jsx";
import CounterWIthContext from "./context/CounterWithContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import AxiosPage from "./pages/AxiosPage.jsx";
import Employee from "./pages/Employee.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "hookexample",
                element: <HookExample />,
            },
            {
                path: "redux",
                element: <CounterRedux />,
            },
            {
                path: "context",
                element: (
                    <CounterProvider>
                        <CounterWIthContext />
                    </CounterProvider>
                ),
            },
            {
                path: "axios",
                element: <AxiosPage />,
            },
            {
                path: "employee",
                element: (
                    <ProtectedRoute>
                        <Employee />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);
