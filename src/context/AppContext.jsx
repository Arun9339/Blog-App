import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);
    const [posts,setposts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    const value = {
         posts,
         setposts,
         loading,
         setLoading,
         page,
         setPage,
         totalPages,
         setTotalPages

           };

           return <AppContext.Provider value = {value} >
            {children}
           </AppContext.Provider>

}

export default AppContextProvider;