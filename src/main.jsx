
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "./views/Home.jsx"



const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </BrowserRouter></>
)
  
