import { addDoc, collection } from 'firebase/firestore'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import IconBack from '../../components/Icons/Back'
import TopNav from '../../components/Top-Nav/TopNav'
import { db } from '../../etc/firebase'
import { useFirebaseContext } from '../context/FirebaseContext'

const NewRecipe = () => {
    const navigate = useNavigate()
    const { user, recipe } = useFirebaseContext()

    const createNewRecipe = (e) => {
        e.preventDefault()
        
        const cookTime = document.getElementById('cooktime').value
        const description = document.getElementById('description').value
        const emoji = document.getElementById('emoji').value
        const ingredients = document.getElementById('ingredients').value.split(', ')
        const isPrivate = document.getElementById('private').checked
        const steps = document.getElementById('steps').value.split(', ')
        const title = document.getElementById('title').value
        const utensils = document.getElementById('utensils').value.split(', ')
        const accentColor = document.getElementById('accentColor').value.toString()

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
            formatVersion: '1.1',
            accentColor: accentColor,
        })

        navigate('/home')
    }

    return (
        <>
            <TopNav>   
                <button className='topnavbtn' onClick={(e) => { navigate(-1) }}>
                    <IconBack width='19.2' height='19.2' stroke='white' fill='none' />
                </button>

                <p className='topnavtitle'>New recipe</p>
    
                <button className='topnavbtn' onClick={(e) => { navigate('/settings') }}>
                    <img src={user.photoURL} width='48' height='48' style={{ borderRadius: 1000 }}></img>
                </button>
            </TopNav>

            <form onSubmit={createNewRecipe} className='flex flex-dir-col gap-15 full-height'>
                <input id='cooktime' type='number' placeholder='cook time (mins)'></input>
                <input id='description' type='text' placeholder='description'></input>
                <input id='emoji' type='text' placeholder='emoji'></input>
                <input id='ingredients' type='text' placeholder='ingredients (sep ,)'></input>
                
                <div className='flex flex-dir-row gap-5'>
                    <input id='private' type='checkbox' placeholder='isPrivate'></input>
                    <label>Is Private</label>
                </div>

                <input id='steps' type='text' placeholder='steps (sep ,)'></input>
                <input id='title' type='text' placeholder='title'></input>
                <input id='utensils' type='text' placeholder='utensils (sep ,)'></input>
                <input id='accentColor' type='color'></input>

                <button className='bottom'>
                    Create
                </button>
            </form>
        </>
    )
}

export default NewRecipe