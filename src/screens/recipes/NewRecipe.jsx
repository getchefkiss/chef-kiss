import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewRecipe = () => {
  const navigate = useNavigate()

  const createNewRecipe = (e) => {
    e.preventDefault()

    /*addDoc(collection(db, 'recipes'), {
      cookTime: cookTime,
      creator: user.displayName,
      creatorUID: user.uid,
      dateCreated: Date.now(),
      description: description,
      emoji: emoji,
      ingredients: ingredients,
      private: isPrivate,
      steps: steps,
      title: title,
      utensils: utensils,
      formatVersion: data.recipeFormatVersion,
      imageURL: 'No image',
    })*/

    navigate('/home')
  }

  return <>New recipe coming soon...</>
}

export default NewRecipe
