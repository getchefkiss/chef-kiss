import React from 'react'

import { useNavigate } from 'react-router-dom'
import IconLogoSmall from '../../components/Icons/LogoSmall'
import { setLoggedinCookie } from '../../etc/cookies'

import { signInWithGoogle } from '../../etc/firebase'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex flex-dir-col gap-45 align-items-center'>
        <IconLogoSmall width='92.77' height='44.12' fill='white' />

        <div className='flex flex-dir-col gap-5'>
          <h1 className='text-center'>Sign in</h1>
          <h2 className='text-center fg-white-50'>More sign in options are coming soon!</h2>
        </div>
      </div>

      <button className='bottom' onClick={async (e) => {
        switch(await signInWithGoogle()) {
          case 'auth/user-disabled': 
            alert('Sorry, but this account is disabled. Please try a diffrent account.')
            break
          case true: 
            navigate('/home')
            break
        }
        //setLoggedinCookie(true)
        //navigate('/home')
      }}>Sign in with Google</button>
    </>
  );
}

export default SignIn;