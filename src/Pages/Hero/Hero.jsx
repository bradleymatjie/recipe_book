import './Hero.scss';
import heroPlate from '../../assets/hero-plate.jpg';
import Dessert from '../../assets/dessert.jpg';
import Meaty from '../../assets/meaty.jpg';
import Pastry from '../../assets/pastry.jpg';
import Seafood from '../../assets/seafood.jpg';
import Vegan from '../../assets/vegan.jpg';
import Cocktail from '../../assets/Cocktails.jpg';
import sectionImage from '../../assets/pexels-ella-olsson-1640774.jpg';
import { NavLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='hero-texts'>
            <h1>The Easiest way to make your favourite meal</h1>
            <p>Discover 150+ recipes in your hand with the best recipe. Help you find the easiest way to cook</p>
            <button><NavLink to='/recipe_book/recipes'>Explore Recipes</NavLink></button>
        </div>
        <div className='hero-image'>
            <img src={heroPlate} alt="Hero Plate" />
        </div>
    </section>

    <section className='categories-container'>
      <div className='top'>
        <div>
          <h2>Categories</h2>
          <p>Take a glimpse at the variety of recipes we have for you</p>
        </div>
        <button>View All</button>
      </div>

      <div className="cards">
        <div className="card">
          <img src={Meaty} alt="" />
          <h3>Meaty</h3>
        </div>

        <div className="card">
          <img src={Vegan} alt="" />
          <h3>Vegan</h3>
        </div>

        <div className="card">
          <img src={Seafood} alt="" />
          <h3>SeaFood</h3>
        </div>

        <div className="card">
          <img src={Pastry} alt="" />
          <h3>Pastry</h3>
        </div>

        <div className="card">
          <img src={Dessert} alt="" />
          <h3>Dessert</h3>
        </div>

        <div className="card">
          <img src={Cocktail} alt="" />
          <h3>Cocktails</h3>
        </div>
      </div>
    </section>
    </>
  )
}
