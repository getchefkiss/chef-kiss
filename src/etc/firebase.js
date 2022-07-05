import { initializeApp } from 'firebase/app'
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    setDoc,
    getDoc,
    doc,
    deleteDoc
} from 'firebase/firestore'
import { firebaseConfig } from '../secret.js'

const app  = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db   = getFirestore(app)

const logout = () => { signOut(auth) }

const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()
    try {
        const res  = await signInWithGoogle(auth, googleProvider)
    } catch(err) { console.log(err) }
}

export {
    auth,
    db,
    logout,
    signInWithGoogle,
}