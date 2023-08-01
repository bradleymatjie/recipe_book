import './RecipeDetails.scss';
import { useParams } from 'react-router-dom';
import { recipesList } from '../../recipeslist';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = recipesList.find((item) => item.id === Number(id));

  return (
    <div className="recipe-container">
      {recipe ? (
        <>
          <div className='texts'>
            <h1>{recipe.title}</h1>
            <p>Category: {recipe.category}</p>
            <p className='desc'>{recipe.description}</p>
            <button>ADD TO COOKBOOK</button>
          </div>
          <div className='image'>
            <img src={recipe.img} alt="" />
            <p className='ingredients'>{recipe.ingredients}</p>
          </div>
        </>
      ) : (
        <p>Select a recipe below</p>
      )}
    </div>
  );
};

export default RecipeDetails;
