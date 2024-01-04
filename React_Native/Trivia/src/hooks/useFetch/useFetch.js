import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{fetchData();},[])

    const fetchData = async() =>{
        try {
            const {data : responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    return {error,loading,data};
}

export default useFetch;