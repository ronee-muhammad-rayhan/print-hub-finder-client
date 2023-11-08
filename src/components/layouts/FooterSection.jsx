import { Footer as FooterComponent } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterSection = () => {
    return (
        <FooterComponent className='bg-gray-100'>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <a className='flex justify-start' href="/">
                            <img src="/logo1.jpeg" className="mr-3 h-6 sm:h-9 rounded-md" alt="PrintHubFinder Logo" />
                            <FooterComponent.Title title="PrintHubFinder" />
                        </a>
                        {/* <FooterComponent.Title href="https://b8a11-client-print-hub-finder.web.app">
                            <img src="/logo1.jpeg" className="mr-3 h-6 sm:h-9" alt="PrintHubFinder Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PrinterHubFinder</span>
                        </FooterComponent.Title> */}
                        <FooterComponent.LinkGroup col>
                            <FooterComponent.Link href="#">About</FooterComponent.Link>
                            <FooterComponent.Link href="#">Careers</FooterComponent.Link>
                            <FooterComponent.Link href="#">Brand Center</FooterComponent.Link>
                            <FooterComponent.Link href="#">Blog</FooterComponent.Link>
                        </FooterComponent.LinkGroup>
                    </div>
                    <div>
                        <FooterComponent.Title title="help center" />
                        <FooterComponent.LinkGroup col>
                            <FooterComponent.Link href="#">Discord Server</FooterComponent.Link>
                            <FooterComponent.Link href="#">Twitter</FooterComponent.Link>
                            <FooterComponent.Link href="#">Facebook</FooterComponent.Link>
                            <FooterComponent.Link href="#">Contact Us</FooterComponent.Link>
                        </FooterComponent.LinkGroup>
                    </div>
                    <div>
                        <FooterComponent.Title title="legal" />
                        <FooterComponent.LinkGroup col>
                            <FooterComponent.Link href="#">Privacy Policy</FooterComponent.Link>
                            <FooterComponent.Link href="#">Licensing</FooterComponent.Link>
                            <FooterComponent.Link href="#">Terms &amp; Conditions</FooterComponent.Link>
                        </FooterComponent.LinkGroup>
                    </div>
                    <div>
                        <FooterComponent.Title title="download" />
                        <FooterComponent.LinkGroup col>
                            <FooterComponent.Link href="#">iOS</FooterComponent.Link>
                            <FooterComponent.Link href="#">Android</FooterComponent.Link>
                            <FooterComponent.Link href="#">Windows</FooterComponent.Link>
                            <FooterComponent.Link href="#">MacOS</FooterComponent.Link>
                        </FooterComponent.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterComponent.Copyright href="#" by="PrinterHubFinder™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterComponent.Icon href="#" icon={BsFacebook} />
                        <FooterComponent.Icon href="#" icon={BsInstagram} />
                        <FooterComponent.Icon href="#" icon={BsTwitter} />
                        <FooterComponent.Icon href="#" icon={BsGithub} />
                        <FooterComponent.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </FooterComponent>
    );
};

export default FooterSection;