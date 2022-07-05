import React from 'react'

import { useNavigate } from 'react-router-dom'

import { signInWithGoogle } from '../../etc/firebase'

const SignIn = () => {
  const navigate = useNavigate()

  /*const fetchRecipes = async () => {
    const recipeData = await getDocs(collection(db, 'recipes'))
    setRecipes(recipeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }*/

  return (
    <>
      <button onClick={async (e) => {
        await signInWithGoogle();
        navigate('/home');
      }}>Sign in with Google</button>
    </>
  );
}

export default SignIn;