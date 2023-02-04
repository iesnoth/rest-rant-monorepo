import { createContext, useEffect, useState } from "react";

//This component provides a React context that shares the logged-in user
// across the application, which makes it a natural place for us
// to check for an already-logged-in user on page load.

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider