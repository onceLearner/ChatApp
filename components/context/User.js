import React, { createContext, useState } from "react"

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserProvider = (props) => {
    const [username, setUsername] = useState({
        username: "guest"
    })
    return (
        <UserContext.Provider value={username} >
            <UserDispatchContext.Provider value={setUsername} >
                {props.children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext, UserDispatchContext }