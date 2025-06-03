import { useState } from 'react'
import './App.css'
import {Routes,Route,BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/settings' exact element={<Settings/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
