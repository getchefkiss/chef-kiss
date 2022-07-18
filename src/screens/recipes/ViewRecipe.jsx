import { deleteDoc, doc } from 'firebase/firestore'
import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../etc/firebase'
import { useFirebaseContext } from '../context/FirebaseContext'
import compatability from '../../etc/compatability.json'

const ViewRecipe = () => {
  const navigate = useNavigate()
  const { user, recipes } = useFirebaseContext()
  const { recipeID } = useParams()

  const [currentRecipe, setCurrentRecipe] = useState()
  const [foundRecipe, setFoundRecipe] = useState(false)
  const [myRecipe, setMyRecipe] = useState(false)
  const [uncompatible, setUncompatible] = useState(true)

  useEffect(() => {
    let selectedRecipe = undefined
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == recipeID) {
        selectedRecipe = i
        setFoundRecipe(true)

        if (recipes[i].creatorUID == user.uid) {
          setMyRecipe(true)
        }
      }
    }
    setCurrentRecipe(recipes[selectedRecipe])

    if (compatability.recipeFormatVersion === selectedRecipe) {
      setUncompatible(false)
    }
  }, [])

  const deleteRecipe = (e) => {
    let deleteCheck = window.confirm(
      'are you sure you want to delete ' + currentRecipe.title + ' ?'
    )
    if (deleteCheck == true) {
      deleteDoc(doc(db, 'recipes', currentRecipe.id))
      navigate('/home')
    }
  }

  return <>View recipe coming soon...</>
}

export default ViewRecipe
