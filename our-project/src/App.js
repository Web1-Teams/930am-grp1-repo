import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Footerabd from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ShoppingBag from "./pages/ShoppingBag";
import FAQPage from "./pages/FAQs";
import PagePolicies from "./pages/PagePolicies"
import ContactUs from "./pages/Contact";
import GamingProductsPage from "./pages/GammingProductsPage"
import AsusProductsPage from "./pages/AsusProductsPage"
import BissellProductsPage from "./pages/BissellProductsPage"
import NewAccount from "./pages/NewAccount"
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Home from "./pages/HomeProductsPage"

function App() {
  return (
   
    
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/ShoppingBag" element={<ShoppingBag/>} />
          <Route path="/FAQs" element={<FAQPage/>} />
          <Route path="/PagePolicies" element={<PagePolicies/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/LogIn" element={<LogIn/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/BissellProductsPage" element={<BissellProductsPage/>} />
          <Route path="/NewAccount" element={<NewAccount/>} />
          <Route path="/AsusProductsPage" element={<AsusProductsPage/>} />
          <Route path="/GammingProductsPags" element={<GamingProductsPage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/HomeProductsPage" element={<Home/>} />
          
          
        </Routes>
        <Footerabd/>
      </BrowserRouter>

  );
}

export default App;
