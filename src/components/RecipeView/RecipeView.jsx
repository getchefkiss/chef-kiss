import react from 'react'
import './style.scss'

// NOTE! Should only be used to display recipes.
const RecipeView = ({ children }) => {
  return (
    <div className="recipeview">
      <div className="recipeviewcol">{children}</div>
    </div>
  )
}

export default RecipeView
