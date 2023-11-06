import { Footer as FooterComponent } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterSection = () => {
    return (
        <FooterComponent bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <FooterComponent.Title title="Company" />
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
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterComponent.Copyright href="#" by="Flowbite™" year={2022} />
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