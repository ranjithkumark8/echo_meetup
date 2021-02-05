import React from 'react'

export const EventInfoContext = React.createContext();

const EventInfoContextProvider = ({children}) => {
    const [isGoing , setIsGoing] = React.useState(false)

    return(
        <EventInfoContext.Provider value = {[isGoing , setIsGoing]}>
            {children}
        </EventInfoContext.Provider>
    )
}
export {EventInfoContextProvider}