import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFirebaseContext } from '../../context/FirebaseContext'
import { logout } from '../../etc/firebase'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useFirebaseContext()

  const [userIsSignedIn, setUserIsSignedIn] = useState('No')

  useEffect(() => {
    if (user) {
      setUserIsSignedIn('Yes')
    }
  }, [])

  return (
    <>
      <p>User is signed in: {userIsSignedIn}</p>

      <p>You are home!</p>

      <button
        onClick={() => {
          logout()
          navigate('/acc/sign_in')
        }}
      >
        Log out
      </button>
    </>
  )
}

export default Home
