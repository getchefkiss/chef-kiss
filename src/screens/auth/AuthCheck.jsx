import react from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedinCookie } from '../../etc/cookies'
import { auth } from '../../etc/firebase'

const AuthCheck = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser) navigate('/home')
    else navigate('/signin')
  }, [])

  return <>Checking auth...</>
}

export default AuthCheck
