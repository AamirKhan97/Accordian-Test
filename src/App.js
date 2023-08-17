import "./assets/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom";
import Accordians from "./pages/Accordians";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">

        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="Accordians" element={<Accordians />} />
          </Routes>
        </>
      </div>
    </>
  );
}

export default App;
