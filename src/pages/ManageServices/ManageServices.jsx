import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ManageServices = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5003/my-services?email=${user.email}`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setServices(res.data)
            })
        // fetch(`http://localhost:5003/my-services`, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setServices(data))
    }, []);
    return (
        <div>
            ManageServices {/* EditOrUpdateOrPut and Delete */}
            {services.length}
            <img src={services.image} alt="" />
        </div>
    );
};

export default ManageServices;