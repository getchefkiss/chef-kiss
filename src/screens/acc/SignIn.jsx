import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signInWithGoogle } from '../../etc/firebase'

import Button from '../../components/Button/Button'

const SignIn = () => {
  const navigate = useNavigate()

  const [demoContent, setDemoContent] = useState({})

  useEffect(() => {}, [])

  return (
    <>
      <p>You are at Sign In!</p>

      <Button
        style="fill"
        onClick={async () => {
          switch (await signInWithGoogle()) {
            case 'auth/user-disabled':
              alert('This account is disabled.')
              break
            case true:
              navigate('/app/home')
              break
          }
        }}
      >
        Sign in with Google
      </Button>
    </>
  )
}

export default SignIn
