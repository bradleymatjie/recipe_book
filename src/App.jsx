import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';
import { Hero } from './Pages/Hero/Hero';
import { Category } from './Pages/Categories/Category';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <Routes>
        <Route path='/recipe_book/' element={<Hero />} />
      </Routes>
      {menuToggler && <MobileMenu />}
    </>
  )
}

export default App
