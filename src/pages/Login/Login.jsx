import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleHelmet from "../../components/ui/TitleHelmet";
import axios from "axios";

const Login = () => {
    const { loginUser, setUser, loginWithGoogle } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const notify = () => toast("Login successfull!!!");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((userCredential) => {
                // user logged in successfully
                // setUser(userCredential.user);
                console.log(userCredential.user);

                const loggedInUser = userCredential.user;
                setUser(loggedInUser);

                const user = { email };

                console.log(user);

                axios.post('http://localhost:5003/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })

                notify();
                // navigate(`${location.state}`);
                if (location.state) {
                    navigate(`${location.state}`);
                } else {
                    navigate('/');
                }
                // navigate after login
                // navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((userCredential) => {
                console.log(userCredential.user);
                notify();
                // navigate(`${location.state} || ${"/"}`);
                if (location.state) {
                    navigate(`${location.state}`);
                } else {
                    navigate('/');
                }
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    }
    return (
        <>
            <TitleHelmet title='PrintHubFinder | Login'></TitleHelmet>
            <form onSubmit={handleSubmit} className="flex max-w-[1200px] flex-col gap-4 mx-auto w-3/4 md:w-2/3 lg:w-1/2">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" name="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Login</Button>
            </form>
            <div onClick={handleLoginWithGoogle} className="flex flex-col justify-center items-center text-center py-4">
                or <br />
                You can login with <br />
                <span className="w-auto border-2 flex flex-row items-center justify-center gap-2 px-2 mt-3"> <FcGoogle className="text-center inline" /> Google</span>
            </div>
            <p className="text-center py-4">New to <span className="font-bold">PrinterHubFinder</span>? <Link to={`/register`} className="text-orange-500 font-bold">Register</Link></p>
            <p className="text-center text-red-600">{error}</p>
            <ToastContainer />
        </>
    );
};

export default Login;