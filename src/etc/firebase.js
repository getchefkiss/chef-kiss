import { initializeApp } from 'firebase/app';
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from 'firebase/auth';
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
import { firebaseConfig } from '../secret.js';

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res  = await signInWithPopup(auth, googleProvider);
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
    } catch(err) { console.log(err) }
}
const logout = () => { signOut(auth) }

export {
    auth,
    db,
    signInWithGoogle,
    logout,
}