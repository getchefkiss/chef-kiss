import react from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Recipe = ({ id, className, cookTime, imageURL, stepCount, title, to, isPrivate }) => {
  return (
    <Link to={to} id={id} className={`recipecard ${className}s padding-10`}>
      <div className="recipecardimage">
        <img src={imageURL} />
        <img src={imageURL} className="recipecardimageshadow" />
      </div>

      <div className="recipecardtext flex-dir-col gap-0">
        <p className="recipecardtitle">{title}</p>
        <p className="recipecardstats sub-text">
          {cookTime} | {stepCount} steps
        </p>
      </div>
    </Link>
  )
}

export default Recipe
