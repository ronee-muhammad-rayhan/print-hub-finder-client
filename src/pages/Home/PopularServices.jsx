import { Card } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useServices from "../../hooks/useServices";
import { Link } from "react-router-dom";

const PopularServices = () => {

    const services = useServices();
    const { user } = useAuth();

    // const { _id, nameOfService, nameOfServiceProvider, email, price, serviceArea, description, image } = service;


    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {services.slice(0, 4).map((service) => <div key={service?._id}>{/* {service.email} */}
                    <div className="w-full mx-auto my-8">


                        <Card className={`-red-600 md:w-auto mx-auto flex rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col md:max-w-[calc(100%-30px)] md:flex-row`} imgSrc={service.image} horizontal>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            <div>
                                {/* <img src={image} alt="" /> */}
                                <div className="bg-white rounded-lg shadow-lg">
                                    {/* <img className="object-cover w-full h-48 rounded-t-lg" src={image} alt="Service Image" /> */}
                                    <div className="p-4">
                                        <h2 className="text-2xl font-semibold mb-2">{service.nameOfService}</h2>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <Link to={`/services/${service._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full inline-block">View Details</Link>
                                    </div>
                                    <div className="flex items-center p-4 border-t border-gray-200">
                                        <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="Service Provider Image" />
                                        <p className="ml-2 text-gray-600">{service.nameOfServiceProvider}</p>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-gray-600">{service.serviceArea}</p>
                                        <p className="text-green-600 font-semibold">{service.price}</p>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </div>
                </div>)
                }
            </div>
            <Link to={`/services`} className="text-center text-2xl text-white font-bold mx-auto rounded-md px-2 py-1 bg-blue-600 w-48 mb-8">Show All</Link>
        </div>
    );
};

export default PopularServices;