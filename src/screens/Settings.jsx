import react from 'react'
import { useNavigate } from 'react-router-dom'
import IconBack from '../components/Icons/Back'
import IconSearch from '../components/Icons/Search'
import TopNav from '../components/Top-Nav/TopNav'
import { logout } from '../etc/firebase'
import { useFirebaseContext } from './context/FirebaseContext'

const Settings = () => {
    const navigate = useNavigate()
    const { user, recipes } = useFirebaseContext()

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

            <h1>Settings</h1>

            <button onClick={(e) => {
                logout()
                navigate('/signin')
            }} className='button-second bottom'>Log out</button>
        </>
    )
}

export default Settings