import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('https://b8a11-server-print-hub-finder.vercel.app/services')
            .then(res => setServices(res.data))
    }, [])
    return services;
};

export default useServices;