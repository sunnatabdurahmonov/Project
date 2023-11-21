
import { createContext} from "react";
import { useState } from "react";


export const SectionContext = createContext()

export const SectionContextProvider = ({children}) => {
const [token,setToken] = useState(localStorage.getItem("token"))
const [token2,setToken2] = useState(localStorage.getItem("token2"))



const info = {
    token,
    setToken,
    token2,
    setToken2,
}
return(
    <SectionContext.Provider value={info}>
        {children}
    </SectionContext.Provider>
)
}