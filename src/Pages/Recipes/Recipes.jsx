import './Recipes.scss';

import { recipesList } from '../../recipeslist';
import meaty from '../../assets/meaty.jpg';
import left from '../../assets/left.png';
import right from '../../assets/right.png';

export const Recipes = () => {
  return (
    <section className='recipes'>
        <div className="categories">
            <ul>
                <li>Meaty</li>
                <li>Vegetarian</li>
                <li>Salads</li>
                <li>Desserts</li>
                <li>CockTails</li>
            </ul>
        </div>

        <div className="recipe-container">
          <div className='texts'>
            <h1>Arigular Salad</h1>
            <p>Category: Salads</p>
        
            <p className='desc'>
              This dish shouts comfort food, 
              but it's also impressive enough to 
              serve to dinner guests. Be sure to 
              have a crusty baguette on hand, 
              because the sauce is just wonderful. 
              (Not into bread? You can also serve it 
              alongside rice or pasta.)
            </p>
            <button>ADD TO COOKBOOK</button>
          </div>
          <div className='image'>
                <img src={meaty} alt="" />
                <p className='ingredients'>
                  1 tbsp. extra-virgin olive oil
                  4 boneless skinless chicken breasts
                  Kosher salt
                  Freshly ground black pepper
                  1 tsp. dried oregano
                  3 tbsp. butter
                  3 cloves garlic, minced
                  1 1/2 c. cherry tomatoes, halved
                  3 c. baby spinach
                  1/2 c. heavy cream
                  1/4 c. freshly grated Parmesan
                  Lemon wedges, for serving
                </p>
                <p></p>
          </div>
        </div>

        <div className="recipesList">
            <div className='recipesList-container'>
              {recipesList.map(item => (
                <div className='recipe'>
                  <img src={item.img} alt="recipe image" />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className='arrows'>
              <img src={left} className='left' alt="left" />
              <img src={right} className='right' alt="right" />
            </div>
        </div>
    </section>
  )
}