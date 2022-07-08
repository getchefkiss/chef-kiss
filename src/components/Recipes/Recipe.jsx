import react from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Recipe = ({ id, className, cookTime, emoji, title, to }) => {
    return (
        <Link to={to} id={id} className={`recipe ${className} flex flex-dir-row justify-content-space-between align-items-center`}>
            <div className='recipecardright flex flex-dir-row gap-10'>
                <p className='emoji'>{emoji}</p>
                <p className='title'>{title}</p>
            </div>
            <div className='recipecardleft flex flex-dir-row align-items-center'>
                <p className='cooktime fg-white-50'>{cookTime}</p>
            </div>
        </Link>
    )
}

export default Recipe