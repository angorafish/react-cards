import { useState  } from 'react';
import axios from 'axios';

function useFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (urlSuffix = "") => {
        const response = await axios.get(`${baseUrl}${urlSuffix}`);
        setData(data => [...data, response.data]);
    };

    return [data, addData];
}

export { useFlip, useAxios };