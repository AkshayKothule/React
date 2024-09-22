import {useEffect , useState} from "react"

function useCurrencyinfo(currency){
    useEffect(()=>{
        const[data , setData]=useState({});
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //convert data into json
        .then((res)=>setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data);
    return data;

}

export default useCurrencyinfo;