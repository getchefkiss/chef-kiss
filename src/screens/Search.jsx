import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from './context/FirebaseContext'

const Search = () => {
  const navigate = useNavigate()
  const { user, recipes } = useFirebaseContext()
  const [result, setResult] = useState([])

  useEffect(() => {
    setResult(recipes)
  }, [])

  const search = (e) => {
    const query = e.currentTarget.value.toLowerCase()
    let results = []

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].title.toLowerCase() == query) {
        console.log(recipes[i])
      }
    }
    //console.log(results)
  }

  return <>Search coming soon...</>
}

export default Search
