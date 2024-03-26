import {  useEffect, useState, createRef } from "react";

export function useArrayRef(arrayOfObject) {
    const [refValue,setRefValue] = useState([])

    useEffect(() => {
        setRefValue((prev)=> [...arrayOfObject].fill().map((_,i)=>prev[i] || createRef()))
        
    }, [arrayOfObject]);

    return {
        refValue
    };
}