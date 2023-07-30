import './Hero.scss';
import heroPlate from '../../assets/hero-plate.jpg';

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

    </>
  )
}
