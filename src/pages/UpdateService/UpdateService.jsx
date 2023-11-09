import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, /* useParams */ } from "react-router-dom";
import TitleHelmet from "../../components/ui/TitleHelmet";
import axios from "axios";

const UpdateService = () => {

    const { user } = useAuth();
    // const serviceFromParams = useParams();
    const serviceFromParams = useLoaderData();
    console.log('serviceFromParams', serviceFromParams);

    const handleSubmit = event => {
        event.preventDefault();
        console.log('handlesubmit');

        const form = event.target;

        const nameOfService = form.nameOfService.value;
        const nameOfServiceProvider = form.nameOfServiceProvider.value;
        const email = form.email.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const image = form.image.value;

        console.log(nameOfService, nameOfServiceProvider, email, price, serviceArea, description, image);

        const service = {
            nameOfService,
            nameOfServiceProvider,
            email,
            price,
            serviceArea,
            description,
            imageOfService: image,
            imageOfServiceProvider: user.photoURL

        }

        axios.put(`https://b8a11-server-print-hub-finder.vercel.app/my-services/update/${serviceFromParams._id}`, service, { withCredentials: true })
            .then(res => console.log(res.data));

        /* fetch(`https://b8a11-server-print-hub-finder.vercel.app/my-services/update/${serviceFromParams._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => {
                return res.json();
                // res.json();
                // console.log(res);
                // console.log(res.body);
                // console.log(res.headers);
                // console.log(res.status);
                // // console.log(res.json());
                // console.log(res.json);
            })
            .then(data => {
                console.log(data);
                // console.log('status: ', data.statusCode);
            }); */
    }

    return (
        <form onSubmit={handleSubmit} className=" sm:mx-0 mx-3 md:mx-5 lg:mx-7 xl:mx-14 2xl:mx-96">
            <TitleHelmet title='PrintHubFinder | UpdateService'></TitleHelmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceName" value="NameOfService" />
                    </div>
                    <TextInput id="serviceName" type="text" name="nameOfService" placeholder="Name of the Service" defaultValue={serviceFromParams.nameOfService} required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="nameOfServiceProviderme" value="NameOfServiceProvider" />
                    </div>
                    <TextInput id="nameOfServiceProvider" type="text" name="nameOfServiceProvider" defaultValue={user?.displayName} placeholder="Name of the Service provider" required readOnly />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your Email" />
                    </div>
                    <TextInput id="email" type="email" name="email" defaultValue={user?.email} required readOnly />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Price" />
                    </div>
                    <TextInput id="price" type="number" name="price" placeholder="$" defaultValue={serviceFromParams.price} required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceArea1" value="Service Area" />
                    </div>
                    <TextInput id="serviceArea1" type="text" name="serviceArea" defaultValue={serviceFromParams.serviceArea} required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description1" value="Description" />
                    </div>
                    <TextInput id="description1" type="text" name="description" defaultValue={serviceFromParams.description} required />
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="image1" value="imageURL" />
                </div>
                <TextInput id="image1" type="text" name="image" defaultValue={serviceFromParams.image} required />
            </div>

            <Button type="submit" className="w-full my-3">Update Service</Button>
        </form>
    );
};

export default UpdateService;