import axios from 'axios';
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5003/services')
            .then((response) => {
                console.log(response.data);
                setServices(response.data);
            })
    }, []);

    return (
        <div className='w-full flex flex-col mx-auto border border-red-500'>
            {/* Filter Section */}
            <section>

            </section>
            {/* Services Section */}
            <section className='flex flex-col w-full mx-auto'>
                {
                    services.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </section>
        </div>
    );
};

export default Services;