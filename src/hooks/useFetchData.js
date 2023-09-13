import { useEffect, useState } from "react";

export default function useFetchData(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/table-data.json').then(res => res.json()).then(data => setData(data));
    }, [])

    return [data,setData];
}