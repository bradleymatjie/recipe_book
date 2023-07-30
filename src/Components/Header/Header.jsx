import './Header.scss';

export const Header = ({ menuTogglerFunction, menuTogglerValue }) => {
 return (
  <header className='header'>
    <div>
      logo
    </div>

    <nav>
      <ul className='header-navItems'>
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
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