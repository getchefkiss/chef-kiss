import { addDoc, collection } from 'firebase/firestore'
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../../components/Top-Nav/TopNav'
import { db } from '../../etc/firebase'
import { useFirebaseContext } from '../context/FirebaseContext'
import data from '../../etc/compatability.json'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const NewRecipe = () => {
  const navigate = useNavigate()
  const { user, recipe } = useFirebaseContext()

  const [cookTime, setCookTime] = useState(0)
  const [description, setDescription] = useState('Placeholder description')
  const [emoji, setEmoji] = useState('⛔')
  const [ingredients, setIngredients] = useState([])
  const [isPrivate, setIsPrivate] = useState(true)
  const [steps, setSteps] = useState([])
  const [title, setTitle] = useState('Placeholder title')
  const [utensils, setUtensils] = useState([])
  const [recipeImage, setRecipeImage] = useState(undefined)
  const [imageURLS, setImageURLS] = useState(null)

  //const imageRef = ref(storage, 'recipeimages/')
  const createNewRecipe = (e) => {
    e.preventDefault()

    //uploadBytes(imageRef, recipeImage).then((snapshot) => {
    //    getDownloadURL(snapshot.ref).then((url) => {
    //        setImageURLS((prev) => [...prev, url])
    //    })
    //})

    addDoc(collection(db, 'recipes'), {
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
      //imageURL:
    })

    navigate('/home')
  }

  return (
    <>
      <TopNav>
        <button
          className="topnavbtn"
          onClick={(e) => {
            navigate(-1)
          }}
        >
          <ArrowBackIcon width="19.2" height="19.2" stroke="white" fill="none" />
        </button>

        <p className="topnavtitle">New recipe</p>

        <button
          className="topnavbtn"
          onClick={(e) => {
            navigate('/settings')
          }}
        >
          <img src={user.photoURL} width="48" height="48" style={{ borderRadius: 1000 }}></img>
        </button>
      </TopNav>

      <form onSubmit={createNewRecipe} className="flex flex-dir-col gap-15 full-height">
        <input
          type="number"
          placeholder="cook time (mins)"
          onChange={(e) => {
            setCookTime(e.target.value.toString())
          }}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></input>
        <input
          type="text"
          placeholder="emoji"
          onChange={(e) => {
            setEmoji(e.target.value)
          }}
        ></input>
        <input
          type="text"
          placeholder="ingredients (sep ,)"
          onChange={(e) => {
            setIngredients(e.target.value.split(', '))
          }}
        ></input>

        <div className="flex flex-dir-row gap-5">
          <input
            type="checkbox"
            placeholder="isPrivate"
            onChange={(e) => {
              setIsPrivate(e.target.checked)
            }}
          ></input>
          <label>Is Private</label>
        </div>

        <input
          type="text"
          placeholder="steps (sep ,)"
          onChange={(e) => {
            setSteps(e.target.value.split(', '))
          }}
        ></input>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        ></input>
        <input
          type="text"
          placeholder="utensils (sep ,)"
          onChange={(e) => {
            setUtensils(e.target.value.split(', '))
          }}
        ></input>
        <input
          type="file"
          accept="image/jpg, image/jpeg"
          onChange={(e) => {
            setRecipeImage(e.target.files[0])
          }}
        ></input>

        <button className="bottom">Create</button>
      </form>
    </>
  )
}

export default NewRecipe
