import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { auth, db, logout,  signInWithGoogle } from '../../etc/firebase';

const SignIn = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    const recipeData = await getDocs(collection(db, 'recipes'));
    setRecipes(recipeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const signin_google = (e) => {
    signInWithGoogle();  
  }

  const getCurrentUser = (e) => {
    console.log(auth.currentUser);
  }

  const makeNewRecipe = (e) => {
    addDoc(collection(db, 'recipes'), {
      name: document.getElementById('recipe_title').value,
      creatorDisplayName: auth.currentUser.displayName,
    });
  }

  return (
    <>
      <button onClick={signin_google}>Sign in with Google</button>
      <button onClick={getCurrentUser}>Get current user</button>
      <button onClick={logout}>Logout</button>
      <br></br>
      <input id='recipe_title' placeholder='New recipe title'></input>
      <button onClick={makeNewRecipe}>Make new recipe</button>
      <br></br>
      <button onClick={fetchRecipes}>Get recipes</button>
      <div id='recipe_list'>
        {recipes.map((data) => (
          <>
            <p>
              Recipe Name: {data.name}<br />
              Recipe Creator: {data.creatorDisplayName}
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export default SignIn;