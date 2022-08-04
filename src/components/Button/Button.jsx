import './style.scss'

const Button = ({ className, id, onClick, style, children }) => {
  return (
    <button className={`button style ${className}`} id={id} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
