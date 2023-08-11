import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./views/Auth";
import Home from "./views/Home";
import Header from "./components/Header";
import Books from "./views/Books";
import LocalStorage from "./utils/LocalStorage";
import { Toaster } from "react-hot-toast";

function App() {
  const isAuth = LocalStorage.get("isAuth");

  if (!isAuth) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-library" element={<Books />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
