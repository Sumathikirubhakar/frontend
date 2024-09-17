import axios from 'axios';
import React, { useState, useEffect } from 'react';


// USING FETCH METHOD:
export function useFetch(api) {

    const [url, setURL] = useState([]);

// USING FETCH - (TRY CATCH METHOD):
    useEffect(() => {
        try {

            fetch(api)
                .then((res) => { return res.json() })
                .then((data) => { setURL(data) });
        } catch (error) {
            console.log(error);
        } finally{
            console.log("success");
            
        }
    }, [api])

    return [url];
}

//  NORMAL FETCH METHOD:
fetch(api)
.then((res) => { return res.json() })
.then((data) => { setURL(data) });
console.log("error");


// USING FETCH - ( AXIOS METHOD ):
export function useAxiosGet(api){
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(api)
        .then((res)=>{setData(res.data)})
    },[api])
    console.log("success")

    return [data];
}
