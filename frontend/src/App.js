import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGrid from "./components/Photos/PhotoGrid";
import LoginScreen from "./components/Login/LoginScreen";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PhotoGrid />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
