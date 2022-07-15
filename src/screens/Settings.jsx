import react from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/Top-Nav/TopNav'
import { setLoggedinCookie } from '../etc/cookies'
import { logout } from '../etc/firebase'
import { useFirebaseContext } from './context/FirebaseContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Settings = () => {
  const navigate = useNavigate()
  const { user, recipes } = useFirebaseContext()

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

        <p className="topnavtitle">Settings</p>

        <button
          className="topnavbtn"
          onClick={(e) => {
            navigate('/settings')
          }}
        >
          <img src={user.photoURL} width="48" height="48" style={{ borderRadius: 1000 }}></img>
        </button>
      </TopNav>

      <div className="flex flex-dir-col gap-10 bottom">
        <button
          onClick={(e) => {
            logout()
            //setLoggedinCookie(false)
            navigate('/signin')
          }}
        >
          Log out
        </button>
      </div>
    </>
  )
}

export default Settings
