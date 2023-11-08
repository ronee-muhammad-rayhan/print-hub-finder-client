// import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ManageServices = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
        /*  axios.get(`http://localhost:5003/my-services?email=${user.email}`, { withCredentials: true })
             .then(res => {
                 console.log(res.data);
                 setServices(res.data)
             }) */
        fetch(`http://localhost:5003/my-services?email=${user.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email]);

    const handleUpdate = id => {
        return navigate(`/my-services/update/${id}`);
    }

    const handleDelete = (id) => {
        fetch(`/services/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(data => {
                console.log(data);
                console.log('deleted successfully');
            });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 justify-between">
            {/* ManageServices services.length => EditOrUpdateOrPut and Delete */}
            {
                services?.map(service =>
                    <div key={service._id}>
                        <a className="flex flex-col items-center text-center bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] h-[428px] py-6" href="#">
                            <div className="grow">
                                <div className="h-48"><img className="w-full h-48  object-contain" src={service.image} alt="Image Description" /></div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {service.nameOfService}
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                    <h3>Price: ${service.price}</h3>
                                </div>
                            </div>
                            <div className="w-full flex justify-around flex-1">
                                {/* Update Action */}
                                <button onClick={() => handleUpdate(service._id)} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Edit
                                </button>
                                {/* Delete Action */}
                                <button onClick={() => handleDelete(service._id)} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Delete
                                </button>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    );
};

export default ManageServices;