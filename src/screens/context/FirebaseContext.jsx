import { collection, onSnapshot } from 'firebase/firestore'
import react, { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { auth, db } from '../../etc/firebase'
import data from '../../etc/compatability.json'

const firebaseContext = createContext()

export const FirebaseContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [recipes, setRecipes] = useState([])
  const [myRecipes, setMyRecipes] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
    })

    const unsubscribe = onSnapshot(collection(db, 'recipes'), (snapshot) => {
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

            /*setDoc(
              doc(db, 'recipes', doc.id),
              {
                formatVersion: data.formatVersion,
                emoji: null,
              },
              { merge: true }
            ).then(() => console.log(`Doc [${doc.id}] updated to new format.`))*/
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
    return unsubscribe
  }, [])

  return (
    <firebaseContext.Provider value={{ user, recipes, myRecipes }}>
      {children}
    </firebaseContext.Provider>
  )
}

export const useFirebaseContext = () => {
  return useContext(firebaseContext)
}
