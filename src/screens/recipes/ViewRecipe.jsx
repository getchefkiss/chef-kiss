import { deleteDoc, doc } from 'firebase/firestore'
import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IconBack from '../../components/Icons/Back'
import TopNav from '../../components/Top-Nav/TopNav'
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
        for(let i = 0; i < recipes.length; i++) {
            if(recipes[i].id == recipeID) { 
                selectedRecipe = i
                setFoundRecipe(true)

                if(recipes[i].creatorUID == user.uid) { setMyRecipe(true) }
            }
        }
        setCurrentRecipe(recipes[selectedRecipe])

        if(compatability.recipeFormatVersion === selectedRecipe) { setUncompatible(false) }
    }, [])

    const deleteRecipe = (e) => {
        let deleteCheck = window.confirm('are you sure you want to delete ' + currentRecipe.title + ' ?')
        if (deleteCheck == true) { 
            deleteDoc(doc(db, 'recipes', currentRecipe.id))
            navigate('/home')
        }
    }
    
    return (
        <>
            <TopNav>   
                <button className='topnavbtn' onClick={(e) => { navigate(-1) }}>
                    <IconBack width='19.2' height='19.2' stroke='white' fill='none' />
                </button>

                <button className='topnavbtn' onClick={(e) => { navigate('/settings') }}>
                    <img src={user.photoURL} width='48' height='48' style={{ borderRadius: 1000 }}></img>
                </button>
            </TopNav>

            {foundRecipe && (
                <>
                    {uncompatible == false && (
                        <p>Recipe uncompatible!</p>
                    )}

                    <ul style={{background: currentRecipe.accentColor}}>
                        <li>cookTime: {currentRecipe.cookTime}m</li>
                        <li>creator: {currentRecipe.creator}</li>
                        <li>creatorUID: {currentRecipe.creatorUID}</li>
                        <li>dateCreated: {currentRecipe.dateCreated[0]} | {currentRecipe.dateCreated[1]}</li>
                        <li>description: {currentRecipe.description}</li>
                        <li>emoji: {currentRecipe.emoji}</li>
                        <li>formatVersion: {currentRecipe.formatVersion}</li>
                        <li>id: {currentRecipe.id}</li>
                        <li>private: {currentRecipe.private.toString()}</li>
                        <li>steps: {currentRecipe.steps.toString()}</li>
                        <li>title: {currentRecipe.title}</li>
                        <li>utensils: {currentRecipe.utensils.toString()}</li>
                        <li>formatVersion: {currentRecipe.formatVersion}</li>
                        <li>accentColor: {currentRecipe.accentColor}</li>
                    </ul>
                </>
            )}
            {foundRecipe == false && (<p>Recipe not found</p>)}

            {myRecipe && (
                <button onClick={deleteRecipe} className='button-second bottom'>
                    Delete
                </button>
            )}
        </>
    )
}

export default ViewRecipe