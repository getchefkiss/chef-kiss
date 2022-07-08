import { collection, onSnapshot } from 'firebase/firestore'
import react, { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { auth, db } from '../../etc/firebase'

const firebaseContext = createContext()

export const FirebaseContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
        })
      
        const unsubscribe = onSnapshot(collection(db, 'recipes'), (snapshot) => {
            let recipes = []
            snapshot.docs.forEach((doc) => {
              recipes.push({ ...doc.data(), id: doc.id })
            })
            setRecipes(recipes)
        })

        return unsubscribe
    }, [])

    return (
        <firebaseContext.Provider value={{ user, recipes }}>
            { children }
        </firebaseContext.Provider>
    )
}

export const useFirebaseContext = () => {
    return useContext(firebaseContext)
}