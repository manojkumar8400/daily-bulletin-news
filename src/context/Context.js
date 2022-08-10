import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {

    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10");
                setArticleData(data);
            }
        )();
    }, []);


    return (
        <dataContext.Provider value={{ articleData }}>
            {children}
        </dataContext.Provider>
    )
}

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataProvider }