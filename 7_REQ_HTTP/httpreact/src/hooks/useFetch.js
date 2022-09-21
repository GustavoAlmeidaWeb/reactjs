import { useState, useEffect } from "react";
import axios from "axios";

// 4 - Custom hook 
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - Refatoring Post
    const [config, setConfig] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - Loading
    const [loading, setLoading] = useState(false);

    // 7 - Errors Traitment
    const [error, setError] = useState(null);

    const httpConfig = (data, method, id) => {

        // Create product method
        if(method === 'POST'){
            setConfig({
                url,
                data,
                method
            })
        
        // Delete product method
        } else if (method === 'DELETE') {
            setConfig({
                url: `${url}/${data}`,
                method
            })

        // Update product method
        } else if (method === 'PUT') {
            setConfig({
                url: `${url}/${id}`,
                data,
                method
            })
        }
    }

    useEffect(() => {

        const fetchData = () => {

            setLoading(true);

            try {
                
               axios.get(url).then(response => setData(response.data));

            } catch (error) {

                console.log(error.message);
                setError('Houve algum problema ao carregar os dados.');

            }
            
            setLoading(false);
        }

        fetchData();

    }, [url, callFetch]);

    // 5 - Refatoring Post and Delete with Axios
    useEffect(() => {

        const httpRequest = async () => {

            // Usei o Try Catch e deu merda... Não sei o pq :( ...
            await axios({...config}).then(response => setCallFetch(response.data));

        }
        httpRequest();

    },[config]);

    return { data, httpConfig, loading, error };
}