import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <div className="main-container">
                <Navbar />
                <Homepage />
            </div>
        </>
    );
}

export default App;
