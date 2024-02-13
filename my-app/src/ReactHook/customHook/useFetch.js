import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialType) {
    const [data, setData] = useState('가져오는 중')
    const fetchUrl = (type) => {
        fetch(baseUrl + '/' + type)
            .then((res) => res.json())
            .then((res) => setData(res));
    }

    useEffect(() => {
        fetchUrl(initialType)
    }, []);

    return{
        data,
        fetchUrl
    }
}