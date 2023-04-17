import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoHome from "./components/Photos/PhotoHome";
import PhotoProfile from "./components/Photos/PhotoProfile";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import ProtectedRoute from "./Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<PhotoHome />} />
            <Route path="/perfil/:user" element={<PhotoProfile />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
