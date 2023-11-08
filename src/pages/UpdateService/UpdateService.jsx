import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const UpdateService = () => {

    const { user } = useAuth();
    const serviceFromParams = useParams();

    const handleSubmit = event => {
        event.preventDefault();

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

        fetch('http://localhost:5003/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    return (
        <form onSubmit={handleSubmit} className=" sm:mx-0 mx-3 md:mx-5 lg:mx-7 xl:mx-14 2xl:mx-96">
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

            <Button className="w-full my-3"><input type="submit" value="Update Service" /></Button>
        </form>
    );
};

export default UpdateService;