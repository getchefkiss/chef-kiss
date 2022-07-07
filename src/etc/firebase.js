import { initializeApp } from 'firebase/app'
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import {
    addDoc,
    collection,
    getDocs,
    getFirestore, query, where
} from 'firebase/firestore'
import { firebaseConfig } from '../secret.js'

const app  = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db   = getFirestore(app)

const logout = () => { signOut(auth) }

const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user;
        const q    = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);

        if(docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email
            });
        }

    } catch(err) { console.warn(err) }
}

export {
    auth,
    db,
    logout,
    signInWithGoogle,
}