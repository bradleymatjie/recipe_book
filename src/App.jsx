import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';
import { Hero } from './Pages/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import { Recipes } from './Pages/Recipes/Recipes';

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
        <Route path='/recipe_book/recipes' element={<Recipes />} />
      </Routes>
      {menuToggler && <MobileMenu />}
    </>
  )
}

export default App
