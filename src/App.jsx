import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';
import { Hero } from './Pages/Hero/Hero';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <Hero />
      {menuToggler && <MobileMenu />}
    </>
  )
}

export default App
