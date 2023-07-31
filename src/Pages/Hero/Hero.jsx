import './Hero.scss';
import heroPlate from '../../assets/hero-plate.jpg';
import Dessert from '../../assets/dessert.jpg';
import Meaty from '../../assets/meaty.jpg';
import Cocktails from '../../assets/cocktails.jpg';
import Pastry from '../../assets/pastry.jpg';
import Seafood from '../../assets/seafood.jpg';
import Vegan from '../../assets/vegan.jpg';
import sectionImage from '../../assets/pexels-ella-olsson-1640774.jpg';




export const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='hero-texts'>
            <h1>The Easiest way to make your favourite meal</h1>
            <p>Discover 150+ recipes in your hand with the best recipe. Help you find the asiest way to cook</p>
            <button>Explore Recipes</button>
        </div>
        <div className='hero-image'>
            <img src={heroPlate} alt="Hero Plate" />
        </div>
    </section>
    
    <section className="categories-container">
      <h2>Categories</h2>
      <p>Take a glimpse at the variety of recipes we have for you</p>
      <a href="#!">View All</a>
      <div className="row">

        <div className="food-item">
        <img src={Meaty} alt="Meaty"></img>
        <a href="#!">Meaty</a>
        </div>

        <div className="food-item">
        <img src={Vegan} alt="Vegeterian/Vegan"></img>
        <a href="#!">Vegeterian & Vegan</a>
        </div>

        <div className="food-item">
        <img src={Pastry} alt="Pastry"></img>
        <a href="#!">Pastry</a>
        </div>
    </div>

      <div className="row">
        <div className="food-item">
        <img src={Seafood} alt="Seafood"></img>
        <a href="#!">Seafood</a>
        </div>

        <div className="food-item">
        <img src={Dessert} alt="Desserts"></img>
        <a href="#!">Desserts</a>
        </div>
        
        <div className="food-item">
        <img src={Cocktails} alt="Cocktails"></img>
        <a href="#!">Cocktails</a>
        </div>

      </div>

    </section>
      
    <section>
      <div className="section-image">
        <img src={sectionImage} alt="meal"/>
      </div>
    </section>
    <footer>
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>Contact Us</li>  
        </ul>  
        </div>
        <div className="links">
          <h3>Social</h3>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Pintrest</li>  
        </ul>  
        </div>
        <div className="form">
          <h3>Newsletter</h3>
          <div className="input-box">
          <input type="text" name="email" placeholder="Type in Email"></input>
          <button type="submit">Subscribe</button>
          </div>
          </div>
      </div>
    </footer>

    </>
  )
}
