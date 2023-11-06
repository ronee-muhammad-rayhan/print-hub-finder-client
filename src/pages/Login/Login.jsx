import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <>
            <form className="flex max-w-[1200px] flex-col gap-4 mx-auto w-3/4 md:w-2/3 lg:w-1/2">
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
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Login</Button>
            </form>
            <div className="flex flex-col justify-center items-center text-center py-4">
                or <br />
                You can login with <br />
                <span className="w-auto border-2 flex flex-row items-center justify-center gap-2 px-2 mt-3"> <FcGoogle className="text-center inline" /> Google</span>
            </div>
            <p className="text-center py-4">New to <span className="font-bold">PrinterHubFinder</span>? <Link to={`/register`} className="text-orange-500 font-bold">Register</Link></p>
        </>
    );
};

export default Login;