import React from "react"

export const AppContext = React.createContext()

export const AppContextProvider = ({children}) => {

    const [category , setCategory ] =React.useState("")
    const [header , setHeader ] =React.useState("")
    
    const value = {category , setCategory , header , setHeader} 
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}