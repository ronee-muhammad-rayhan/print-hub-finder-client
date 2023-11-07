import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css';
import useAuth from '../../hooks/useAuth';
// import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut().then(() => {
            console.log('logged out');
        }).catch((error) => {
            // An error happened.
            console.error(error.message);
        });
    }

    return (
        <Navbar id='nav' fluid rounded>
            <Navbar.Brand href="https://b8a11-client-print-hub-finder.web.app">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="PrintHubFinder Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PrinterHubFinder</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={true}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">RoneeMRayhan</span>
                        <span className="block truncate text-sm font-medium">roneemrayhan@rayhanworld.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink>
                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                </NavLink>
                <Navbar.Link href="/services">Services</Navbar.Link>
                {/* <Navbar.Link href="#">Services</Navbar.Link> */}
                <Dropdown
                    arrowIcon={true}
                    inline
                    label={"Dashboard"}
                >
                    <Link to={`/my-services?email=${user?.email}`}><Dropdown.Item>My Services</Dropdown.Item></Link>
                    <Link to={`/add-a-service`}><Dropdown.Item href='#'>Add Services</Dropdown.Item></Link>
                    <Dropdown.Item href='#'>My Schedules</Dropdown.Item>
                    {/* <Link><Dropdown.Item className='bg-red-300'>MySchedule</Dropdown.Item></Link> */}
                </Dropdown>
                {
                    user?.email
                        ?
                        <Navbar.Link onClick={handleLogout} href="/">Logout</Navbar.Link>
                        :
                        <Navbar.Link href="/login">Login</Navbar.Link>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;