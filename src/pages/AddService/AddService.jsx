import { Button, Label, TextInput } from "flowbite-react";

const AddService = () => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:mx-0 mx-3 md:mx-5 lg:mx-7 xl:mx-14 2xl:mx-96">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
            </div>

            <Button><input type="submit" value="Add Service" /></Button>
        </form>);
}

export default AddService;