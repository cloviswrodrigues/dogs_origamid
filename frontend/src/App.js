import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGrid from "./components/Photos/PhotoGrid";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PhotoGrid />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
