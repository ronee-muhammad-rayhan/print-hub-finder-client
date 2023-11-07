import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css';
// import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar id='nav' fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
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
                    <Dropdown.Item href='#'>My Services</Dropdown.Item>
                    <Link to={`/add-a-service`}><Dropdown.Item href='#'>Add Services</Dropdown.Item></Link>
                    <Dropdown.Item href='#'>My Schedules</Dropdown.Item>
                    {/* <Link><Dropdown.Item className='bg-red-300'>MySchedule</Dropdown.Item></Link> */}
                </Dropdown>
                <Navbar.Link href="/">Logout</Navbar.Link>
                <Navbar.Link href="/login">Login</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;