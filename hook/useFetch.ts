import { useState, useEffect } from "react";
import axios from "axios";

export const  useFetch = (endpoint,query) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': '564c13bbd6mshca48eedffe79131p14c536jsnbadb09be7388',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
           ...query
        },

    };
    const fetchData = async () => {
        setLoading(true);
        try {
           const response= await axios.request(options)
            setData(response.data.data);
           setLoading(false);
        }catch(err) {
            setError(err);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const refetch =  () => {
        setLoading(true);
        fetchData()
    }
    return {data, isLoading, refetch,error}

}
