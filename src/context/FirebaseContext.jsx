import React, { useState, createContext, useEffect, useContext } from 'react'

import { auth, db } from '../etc/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

import data from '../etc/compatability.json'

const firebaseContext = createContext()

export const FirebaseContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [globalRecipes, setRecipes] = useState([])
  const [localRecipes, setMyRecipes] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
    })

    const recipeFetch = onSnapshot(collection(db, 'recipes'), (snapshot) => {
      let recipes = []
      let myRecipes = []
      let needMatchingFormatVersion = data.needRecipeFormatVersion

      snapshot.docs.forEach((doc) => {
        if (needMatchingFormatVersion) {
          if (data.recipeFormatVersion === doc.data().formatVersion) {
            recipes.push({ ...doc.data(), id: doc.id })
            if (doc.data().creatorUID == auth.currentUser.uid) {
              myRecipes.push({ ...doc.data(), id: doc.id })
            }
          } else {
            console.log(`Problem doc(s): ${doc.data().title}`)
          }
        } else {
          recipes.push({ ...doc.data(), id: doc.id })
          if (doc.data().creatorUID == auth.currentUser.uid) {
            myRecipes.push({ ...doc.data(), id: doc.id })
          }
        }
      })
      setRecipes(recipes)
      setMyRecipes(myRecipes)
    })
    return recipeFetch
  }, [])

  return (
    <firebaseContext.Provider value={{ user, globalRecipes, localRecipes }}>
      {children}
    </firebaseContext.Provider>
  )
}

export const useFirebaseContext = () => {
  return useContext(firebaseContext)
}
