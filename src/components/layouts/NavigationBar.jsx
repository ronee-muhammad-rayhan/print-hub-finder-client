import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const NavigationBar = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut().then(() => {
            console.log('logged out', user);
            axios.post('https://b8a11-server-print-hub-finder.vercel.app/logout', user)
                .then(res => {
                    console.log(res.data);
                });

        }).catch((error) => {
            // An error happened.
            console.error(error.message);
        });
    }

    return (
        <Navbar id='nav' fluid rounded>
            <Navbar.Brand href="https://b8a11-client-print-hub-finder.web.app">
                <img src="/logo1.jpeg" className="mr-3 h-6 sm:h-9" alt="PrintHubFinder Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PrinterHubFinder</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={true}
                    inline
                    label={
                        user?.photoURL ?
                            <Avatar alt="User settings" img={user.photoURL} rounded />
                            :
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        {
                            user?.displayName ? <span className="block text-sm">{user.displayName}</span> : undefined
                        }
                        {
                            user?.email ? <span className="block truncate text-sm font-medium">{user.email}</span> : undefined
                        }
                    </Dropdown.Header>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Navbar.Link onClick={handleLogout} href="/">Logout</Navbar.Link></Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to={`/`}>

                    Home

                </NavLink>
                <NavLink to="/services">Services</NavLink>
                {/* <Navbar.Link href="#">Services</Navbar.Link> */}
                <Dropdown
                    arrowIcon={true}
                    inline
                    label={"Dashboard"}
                >
                    <Link to={`/my-services?email=${user?.email}`}><Dropdown.Item>My Services</Dropdown.Item></Link>
                    <Link to={`/add-a-service`}><Dropdown.Item>Add Services</Dropdown.Item></Link>
                    <Link to={`/my-schedules/bookings?email=${user?.email}`}><Dropdown.Item>My Schedules</Dropdown.Item></Link>
                    {/* <Link><Dropdown.Item className='bg-red-300'>MySchedule</Dropdown.Item></Link> */}
                </Dropdown>
                {
                    user?.email
                        ?
                        <Navbar.Link onClick={handleLogout} href="/">Logout</Navbar.Link>
                        :
                        <NavLink to={`/login`}>Login</NavLink>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;