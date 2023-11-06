import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TitleHelmet from "../../components/ui/TitleHelmet";

const Register = () => {
    const { user, createUser, updateUserProfile, /* updateUserEmail  */ } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password);
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
        if (passwordRegex.test(password)) {
            console.log("Password is valid");
        } else {
            if (password.length < 8) {
                return setError('Password must be at least 8 characters');
            }
            setError('Password must be at least 8 characters where must contain digit, uppercase, lowercase and special character')
            return console.log("Password must be at least 8 characters where must contain digit, uppercase, lowercase and special character");
        }
        await createUser(email, password)
            .then((userCredential) => {
                // new user has been created
                console.log(userCredential.user);
                // navigate('/');
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });

        await updateUserProfile({
            displayName: name,
            photoURL: photo
        }).then(() => {
            console.log('profile updated');
            console.log(user.displayName);
            console.log(user.photoURL);
            // navigate('/');
        }).catch((error) => {
            console.error(error.message);
        });
        // await updateUserEmail(email).then(() => {
        //     console.log('email updated successfully');
        // }).catch((error) => {
        //     console.error(error.message);
        //     navigate('/');
        // });


        navigate('/');

    };
    return (
        <>
            <TitleHelmet title='PrintHubFinder | Register'></TitleHelmet>
            <form onSubmit={handleRegister} className="flex max-w-[1200px] flex-col gap-4 mx-auto w-3/4 md:w-2/3 lg:w-1/2">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput id="name" type="text" name="name" placeholder="Your Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your Email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your Password" />
                    </div>
                    <TextInput id="password1" type="password" name="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photoURL" value="Your PhotoURL" />
                    </div>
                    <TextInput id="photo" type="text" name="photo" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <p className="text-center text-red-500 py-4">{error}</p>
                <Button type="submit">Register</Button>
            </form>
            <p className="text-center py-4">Already have an Account? <Link to={`/login`} className="text-orange-500 font-bold">Login</Link></p>
        </>
    );
};

export default Register;