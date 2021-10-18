import { useState } from 'react'
import {createContext} from 'react'

export const FirebaseContext= createContext(null)
export const AuthContext= createContext(null)

export default function Context({children}){
    const [User, setUser] = useState('hello')
    return(
        <AuthContext.Provider value={{User}}>
            {children}
        </AuthContext.Provider>
    )
}