
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx"
import Reviews from "./views/Reviews.jsx"
import Contact from "./views/Contact.jsx"



const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/reviews" element={<Reviews />}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter></>
)
  
