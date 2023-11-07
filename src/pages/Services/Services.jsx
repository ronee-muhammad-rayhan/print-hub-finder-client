import axios from 'axios';
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    // const [minServices, setMinServices] = useState([]);
    // const [renderServices, setRenderServices] = useState([]);
    // const [showAll, setShowAll] = useState(false);
    // const [seeMoreClicked, setSeeMoreClicked] = useState(false);

    // const [renderServices, setRenderServices] = useState(services);

    const url = `http://localhost:5003/services`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                setServices(response.data);
            });
    }, []);

    // if (!showAll && !minServices) {
    //     const selectedServices = services.slice(1, 4);
    //     setMinServices(selectedServices);
    //     setRenderServices(selectedServices);
    // }

    // if (services.length > 4 && seeMoreClicked === true) {
    //     // setRenderServices(services);
    //     // setShowAll(false);
    // }
    // else if (services.length > 4 && seeMoreClicked === false) {
    //     setRenderServices(services.slice(0, 4));
    //     // setShowAll(true);
    // } else {
    //     // setShowAll(false);
    //     // setRenderServices(services);
    // }

    return (
        <div className='w-full flex flex-col mx-auto border border-red-500'>
            {/* Filter Section */}
            <section>

            </section>
            {/* Services Section */}
            <section className='flex flex-col w-full mx-auto'>
                {
                    services.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    // renderServices?.map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </section>

            {/* <div onClick={() => setSeeMoreClicked(true)} className='text-center pt-14 pb-40' style={{}}>
                {
                    showAll && <button className='bg-[#009444] text-white text-xs font-semibold px-7 py-4 rounded-lg'>See More</button>
                }
            </div> */}

        </div>
    );
};

export default Services;