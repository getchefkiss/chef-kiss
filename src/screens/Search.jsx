import react from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconBack from '../components/Icons/Back';
import Recipe from '../components/Recipes/Recipe';
import TopNav from '../components/Top-Nav/TopNav';
import { useFirebaseContext } from './context/FirebaseContext';

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

        for(let i = 0; i < recipes.length; i++) {
            if(recipes[i].title.toLowerCase() == query) {
                console.log(recipes[i])
            }
        }
        //console.log(results)
    }

    return (
        <>
            <TopNav>   
                <button className='topnavbtn' onClick={(e) => { navigate(-1) }}>
                    <IconBack width='19.2' height='19.2' stroke='white' fill='none' />
                </button>

                <p className='topnavtitle'>Search</p>
    
                <button className='topnavbtn' onClick={(e) => { navigate('/settings') }}>
                    <img src={user.photoURL} width='48' height='48' style={{ borderRadius: 1000 }}></img>
                </button>
            </TopNav>

            <div className='flex flex-dir-col gap-35'>
                <div className='flex flex-dir-col gap-15'>
                    <input type='text' placeholder='Search...' onKeyDown={search} />
                </div>

                <div className='flex flex-dir-col gap-15'>
                    {recipes.map((data) => (
                        <Recipe key={data.id} emoji={data.emoji} title={data.title} cookTime={`${data.cookTime}m`} isPrivate={data.private} to={`/recipe/${data.id}`} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search;