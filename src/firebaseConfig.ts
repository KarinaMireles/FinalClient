import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCdHroFnzGcFxOsnsbXX80pLFmSwyD67WQ",
    authDomain: "final-project-e9adb.firebaseapp.com",
    projectId: "final-project-e9adb",
    storageBucket: "final-project-e9adb.appspot.com",
    messagingSenderId: "765901996604",
    appId: "1:765901996604:web:09801d09536b40eb33b939",
    measurementId: "G-RRQJJSZP8M"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export function signOut(): void {
	auth.signOut()
}
