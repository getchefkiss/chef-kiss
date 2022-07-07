import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../etc/firebase'
import IconSearch from '../components/Icons/Search';
import TopNav from '../components/Top-Nav/TopNav'
import Recipe from '../components/Recipes/Recipe'
import { collection, getDocs, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'

const Home = () => {
  const navigate = useNavigate()
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
    <>
      <TopNav>
        <h1>
          Welcome back, <br/>
          <span className='fg-white-50'>{user.displayName}</span>
        </h1>
        
        <div className='flex flex-dir-row gap-15'>
          <button className='topnavbtn' onClick={(e) => { console.log('You clicked search!') }}>
            <IconSearch width='19.2' height='19.2' stroke='white' fill='none' />
          </button>
          <button className='topnavbtn' onClick={(e) => { console.log('You clicked PFP!') }}>
            <img src={user.photoURL} width='48' height='48' style={{ borderRadius: 1000 }}></img>
          </button>
        </div>
      </TopNav>

      <h1>Recipes</h1>
      {recipes.map((data) => (
        <Recipe key={data.id} emoji={data.emoji} title={data.title} cookTime={`${data.cookTime}m`} />
      ))}

      <button onClick={(e) => {
        logout()
        navigate('/signin')
      }} className='bottom'>Log out *</button>
    </>
  );
}

export default Home;