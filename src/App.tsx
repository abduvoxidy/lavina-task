import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Books from "./views/Books";

function App() {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  if (!isAuth) {
    return (
      <>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-library" element={<Books />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
