import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGrid from "./components/Photos/PhotoGrid";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PhotoGrid />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta/*" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
