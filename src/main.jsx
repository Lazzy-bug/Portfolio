import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import App from "./app/App.jsx";
import { BeyondCode } from "./app/components/BeyondCode.jsx";
import "./styles/index.css";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/beyond-code" element={<BeyondCode />} />
    </Routes>
  </BrowserRouter>
);
