import react from 'react'
import './style.scss'

const CKButton = ({ id, className, style, children, onClick, varient }) => {
  return (
    <button id={id} className={`${className} ${varient}`} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default CKButton
