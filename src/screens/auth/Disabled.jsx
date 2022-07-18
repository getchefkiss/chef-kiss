import react from 'react'
import { useNavigate } from 'react-router-dom'

const DisabledAccount = () => {
  const navigate = useNavigate()

  return (
    <>
      disabled account!
      <button
        className="bottom"
        onClick={() => {
          navigate('/signin')
        }}
        varient="fill"
      >
        Back to sign in
      </button>
    </>
  )
}

export default DisabledAccount
