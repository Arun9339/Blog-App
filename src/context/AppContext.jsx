import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


// Step 1 creation
export const AppContext = createContext();

//step 2 providing

function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);



    // data filling

    async function fetchBlogPosts(page = 1) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setposts(data.posts);
            setTotalPages(data.totalPages);
        }

        catch (error) {
            console.log("Error in fetching data");
            setPage(1);
            setposts([]);
            setTotalPages(data.totalPages);
        }
        setLoading(false);
    }


    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {

        posts,
        setposts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

    };

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>

}

export default AppContextProvider;