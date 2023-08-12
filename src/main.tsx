import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import FullScreenSpinner from "./components/Loaders/FullscreenSpinner.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback={<FullScreenSpinner />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
  </Suspense>
);
