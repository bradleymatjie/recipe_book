import './Recipes.scss';
import { useRef, useState } from 'react';
import { useNavigate, Route, Outlet } from 'react-router-dom';
import { recipesList } from '../../recipeslist';
import meaty from '../../assets/meaty.jpg';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

export const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 
    const containerRef = useRef(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const navigate = useNavigate();
    
    const handleScrollRight = () => {
     
      const scrollDistance = 300;
  
 
      const container = containerRef.current;
  
      
      const currentScroll = container.scrollLeft;
  
     
      const targetScroll = currentScroll + scrollDistance;
  
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    };

    const handleScrollLeft = () => {
      // Define the scroll distance here (e.g., 300px)
      const scrollDistance = 300;
  
      // Get the container element that you want to scroll using the ref
      const container = containerRef.current;
  
      // Calculate the current scroll position
      const currentScroll = container.scrollLeft;
  
      // Calculate the target scroll position (scroll to the left)
      const targetScroll = currentScroll - scrollDistance;
  
      // Perform the smooth scroll animation
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    };

    
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    navigate(`/recipe_book/recipes/${recipe.id}`);
  };

  
  const filteredRecipes = selectedCategory === 'All'
    ? recipesList
    : recipesList.filter(item => item.category === selectedCategory);


  return (
    <section className='recipes'>
        <div className="categories">
        <ul>
          <li
            className={selectedCategory === 'All' ? 'active' : ''}
            onClick={() => handleCategoryFilter('All')}
          >
            All
          </li>
          <li
            className={selectedCategory === 'meaty' ? 'active' : ''}
            onClick={() => handleCategoryFilter('meaty')}
          >
            Meaty
          </li>
          <li
            className={selectedCategory === 'Vegetarian' ? 'active' : ''}
            onClick={() => handleCategoryFilter('Vegetarian')}
          >
            Vegetarian
          </li>
          <li
            className={selectedCategory === 'salads' ? 'active' : ''}
            onClick={() => handleCategoryFilter('salads')}
          >
            Salads
          </li>
          <li
            className={selectedCategory === 'desserts' ? 'active' : ''}
            onClick={() => handleCategoryFilter('desserts')}
          >
            Desserts
          </li>
          <li
            className={selectedCategory === 'cocktails' ? 'active' : ''}
            onClick={() => handleCategoryFilter('cocktails')}
          >
            CockTails
          </li>
        </ul>
        </div>

         {selectedRecipe ? <Outlet />: <p className='customText'>Select A recipe Below</p>}

        <div className={`recipesList ${selectedRecipe ? 'recipeActive': ''}`}>
            <div className='recipesList-container' ref={containerRef}>
            {filteredRecipes.map((item) => (
            <div
              className={`recipe ${selectedRecipe && selectedRecipe.id === item.id ? 'selected' : ''}`}
              key={item.id}
              onClick={() => handleRecipeClick(item)}
            >
              <img src={item.img} alt="recipe image" />
              <h3>{item.title}</h3>
            </div>
          ))}
            </div>
            <div className='arrows'>
              <img src={left} className='left' onClick={handleScrollLeft} alt="left" />
              <img src={right} className='right' onClick={handleScrollRight} alt="right" />
            </div>
        </div>
    </section>
  )
}