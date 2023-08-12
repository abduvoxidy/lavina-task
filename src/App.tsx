import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Books from "./views/Books";
import LocalStorage from "./utils/LocalStorage";

function App() {
  const isAuth = LocalStorage.get("isAuth");

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
