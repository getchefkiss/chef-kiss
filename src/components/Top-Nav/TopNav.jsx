import react from 'react'
import './style.css'

const TopNav = ({ children }) => {
    return (
        <div className='topnav flex flex-dir-row justify-content-space-between align-items-center'>
            { children }
        </div>
    )
}

export default TopNav