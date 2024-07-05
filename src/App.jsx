import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="main-container" style={{ marginTop: "120px" }}>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default App;
