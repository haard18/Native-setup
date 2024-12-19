import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";
export const GlobalContext = createContext();
// export const useGlobal = () => useContext(GlobalContext);
export const useGlobalContext = () => useContext(GlobalContext);



export const GlobalProvider = ({ children }) => {
    const[isLoggedin, setIsLoggedin] = useState(false);
    const[user,setUser]=useState(null);
    const [isloading, setIsLoading] = useState(true);

    useEffect(()=>{
        getCurrentUser()
        .then((user)=>{
            if(user){

                setUser(user);
                setIsLoggedin(true);
            }
            else{
                setIsLoggedin(false);
                setUser(null);

            }
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    })
    return (
        <GlobalContext.Provider value={{
            // Global state
            isLoggedin,
            setIsLoggedin,
            user,
            setUser,
            isloading,

        }}>
            {children}
        </GlobalContext.Provider>
    )
}