import "./App.css";
import Application from "./Pages/Application";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyBooking from "./Pages/MyBooking";
import { useSelector } from "react-redux";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const { isLogged } = useSelector((state) => state.application);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {!isLogged && <Route path="/" element={<Application />} />}
          {isLogged && <Route path="/home" element={<Home />} />}
          {isLogged && <Route path="/mybooking" element={<MyBooking />} />}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
