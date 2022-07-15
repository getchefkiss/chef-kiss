import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from '../components/Top-Nav/TopNav'
import Recipe from '../components/Recipes/Recipe'
import { useFirebaseContext } from './context/FirebaseContext'
import CKButton from '../components/CKButton/CKButton'
import RecipeView from '../components/RecipeView/RecipeView'
import SearchIcon from '@mui/icons-material/Search'

const Home = () => {
  const navigate = useNavigate()
  const { user, recipes, myRecipes } = useFirebaseContext()
  const [recipeKeyID, setRecipeKeyID] = useState([])

  return (
    <>
      <TopNav>
        <h1 className="bebas-nue font-size-50">Welcome back</h1>

        <div className="border flex flex-dir-row gap-15">
          <button
            className="topnavbtn"
            onClick={(e) => {
              navigate('/search')
            }}
          >
            <SearchIcon width="19.2" height="19.2" stroke="white" fill="none" />
          </button>
          <button
            className="topnavbtn"
            onClick={(e) => {
              navigate('/settings')
            }}
          >
            <img src={user.photoURL} width="48" height="48" style={{ borderRadius: 15 }}></img>
          </button>
        </div>
      </TopNav>

      <div className="flex flex-dir-col gap-15">
        <h1>Recipes</h1>
        <RecipeView>
          {myRecipes.map((data) => (
            <Recipe
              key={data.id}
              emoji={data.emoji}
              imageURL={`https://source.unsplash.com/random/200x200?sig=${data.id}`}
              stepCount="null"
              title={data.title}
              cookTime={`${data.cookTime}m`}
              to={`/recipe/${data.id}`}
            />
          ))}
        </RecipeView>
      </div>

      <CKButton
        onClick={(e) => {
          navigate('/recipe/new')
        }}
        varient="fill"
        className="bottom margin-left-auto margin-right-auto sticky"
        style={{ width: 178 }}
      >
        New recipe
      </CKButton>
    </>
  )
}

export default Home
