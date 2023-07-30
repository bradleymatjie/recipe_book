import { memo } from 'react';
import './MobileMenu.scss';
import '../../Utils/Util.css';


export const MobileMenu = memo(() => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
      </ul>
    </div>
  )
})