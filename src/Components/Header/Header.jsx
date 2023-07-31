import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = ({ menuTogglerFunction, menuTogglerValue }) => {
 return (
  <header className='header'>
    <div className='logo'>
      <h2>CookPedia</h2>
    </div>

    <nav>
      <ul className='header-navItems'>
        <li><NavLink to="/recipe_book/">Home</NavLink></li>
        <li><NavLink to="/recipe_book/recipes">Recipes</NavLink></li>
        <li><NavLink to="/recipe_book/about">About</NavLink></li>
        <li><NavLink to="/recipe_book/contact">ContactUs</NavLink></li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "active" : ""}`}
      onClick={() => {
        menuTogglerFunction((state) => (!state))
      }}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
}