import './MobileMenu.scss';
import '../../Utils/Util.css';
import { NavLink } from 'react-router-dom';


export const MobileMenu = () => {
  return (
    <div className='mobileMenu'>
      <ul>
        <li><NavLink to="/recipe_book/">Home</NavLink></li>
        <li><NavLink to="/recipe_book/recipes">Recipes</NavLink></li>
        <li><NavLink to="/recipe_book/about">About</NavLink></li>
        <li><NavLink to="/recipe_book/contact">ContactUs</NavLink></li>
      </ul>
    </div>
  )
}