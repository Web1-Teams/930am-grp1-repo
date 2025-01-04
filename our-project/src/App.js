import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage"; // Ensure you have imported the HomePage component
import ShoppingBag from "./components/ShoppingBag";

function App() {
  return (
    <>
      <div>
        <ShoppingBag />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
