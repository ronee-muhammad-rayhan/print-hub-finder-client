import PropTypes from "prop-types"
import useAuth from "../../hooks/useAuth";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { user } = useAuth();

    const { _id, nameOfService, nameOfServiceProvider, email, price, serviceArea, description, image } = service;

    return (
        <div className="w-full mx-auto my-8">


            <Card className={`border-red-600 md:w-auto mx-auto flex rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col md:max-w-[calc(100%-30px)] md:flex-row`} imgSrc={image} horizontal>
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
                            <h2 className="text-2xl font-semibold mb-2">{nameOfService}</h2>
                            <p className="text-gray-600 mb-4">{description}</p>
                            <Link to={`/services/${_id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full inline-block">View Details</Link>
                        </div>
                        <div className="flex items-center p-4 border-t border-gray-200">
                            <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="Service Provider Image" />
                            <p className="ml-2 text-gray-600">{nameOfServiceProvider}</p>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">{serviceArea}</p>
                            <p className="text-green-600 font-semibold">{price}</p>
                        </div>
                    </div>

                </div>
            </Card>



        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        _id: PropTypes.any,
        description: PropTypes.any,
        email: PropTypes.any,
        image: PropTypes.any,
        nameOfService: PropTypes.any,
        nameOfServiceProvider: PropTypes.any,
        price: PropTypes.any,
        serviceArea: PropTypes.any
    })
}



export default ServiceCard;