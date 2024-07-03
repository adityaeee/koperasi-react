import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <div className="main-container" style={{ marginTop: "120px" }}>
                <Navbar />
                <Homepage />
                <Footer />
            </div>
        </>
    );
}

export default App;
