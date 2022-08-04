import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFirebaseContext } from '../../context/FirebaseContext'

const AuthCheck = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useFirebaseContext()

  const [displayText, setDisplayText] = useState('Checking auth...')

  useEffect(() => {
    if (user) {
      console.log('\n --- ')
      console.log('User found.')
      console.log(user)

      setDisplayText('')

      navigate('/app/home')
    } else {
      console.log('\n --- ')
      console.log('User not found.')

      setDisplayText('')

      navigate('/acc/sign_in')
    }
  }, [])

  return (
    <>
      {children} <p>{displayText}</p>
    </>
  )
}

export default AuthCheck
