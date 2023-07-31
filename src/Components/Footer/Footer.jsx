import './Footer.scss';

import logoSpecial from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={logoSpecial} alt="logo" />
      </div>
      
      <div>
        <h3>ABOUT</h3>
        <p>
          CookPedia.
          980613 Boipelo st
          RoseBank GP 2001
          jozi
        </p>
      </div>

      <div>
      <h3>SITEMAP</h3>
        <ul>
          <li>ABOUT</li>
          <li>PROGRAM</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div>
      <h3>SOCIAL</h3>
        <ul>
          <li>TWIITER</li>
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
          <li>YOUTUBE</li>
        </ul>
      </div>
    </footer>
  );
}