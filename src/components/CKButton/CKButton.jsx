import react from 'react'
import './style.scss'

const CKButton = ({ children, varient, onClick, id, className, style }) => {
  return (
    <button
      id={id}
      className={`ckbutton buttonvarient-${varient} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

export default CKButton
