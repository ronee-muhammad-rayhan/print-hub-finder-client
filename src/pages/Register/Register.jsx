import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <form className="flex max-w-[1200px] flex-col gap-4 mx-auto w-3/4 md:w-2/3 lg:w-1/2">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput id="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your Email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your Password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photoURL" value="Your PhotoURL" />
                    </div>
                    <TextInput id="photo" type="text" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Register</Button>
            </form>
            <p className="text-center py-4">Already have an Account? <Link to={`/login`} className="text-orange-500 font-bold">Login</Link></p>
        </>
    );
};

export default Register;