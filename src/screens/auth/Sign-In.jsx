import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../../etc/firebase'

import CKButton from '../../design/components/CKButton/CKButton'
import { useEffect } from 'react'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <h1 className="headtext textcenter">The new recipe book</h1>
        <h2 className="titletext textcenter subtext">
          Save, share & view recipes all in one platform.
        </h2>
      </div>

      <CKButton
        style={{ width: 250 }}
        onClick={async (e) => {
          switch (await signInWithGoogle()) {
            case 'auth/user-disabled':
              navigate('/acc/disabled')
              break
            case true:
              navigate('/home')
              break
          }
        }}
        varient="text-fill"
        className="bottom center"
      >
        Sign in with Google
      </CKButton>
    </>
  )
}

export default SignIn
