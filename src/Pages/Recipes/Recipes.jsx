import './Recipes.scss';
import { useRef, useState } from 'react'; 
import { recipesList } from '../../recipeslist';
import meaty from '../../assets/meaty.jpg';
import left from '../../assets/left.png';
import right from '../../assets/right.png';

export const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 
    const containerRef = useRef(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null); 


    
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

  const handleRecipeClick = (recipe, index) => {
    setSelectedRecipe(recipe);
    setSelectedRecipeIndex(index); 
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

        <div className="recipe-container">
        {selectedRecipe ? ( 
          <div className='texts'>
            <h1>{selectedRecipe.title}</h1>
            <p>Category: {selectedRecipe.category}</p>
            <p className='desc'>{selectedRecipe.description}</p>
            <button>ADD TO COOKBOOK</button>
          </div>
        ) : (
          <p>Select a recipe from the list</p>
        )}
        {selectedRecipe && (
          <div className='image'>
            <img src={selectedRecipe.img} alt="" />
            <p className='ingredients'>{selectedRecipe.ingredients}</p>
            <p></p>
          </div>
        )}
        </div>

        <div className="recipesList">
            <div className='recipesList-container' ref={containerRef}>
            {filteredRecipes.map((item, index) => ( 
            <div
              className={`recipe ${selectedRecipeIndex === index ? 'selected' : ''}`}
              key={item.title}
              onClick={() => handleRecipeClick(item, index)} 
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