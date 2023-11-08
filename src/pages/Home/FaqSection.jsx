import { Accordion } from 'flowbite-react';

const FaqSection = () => {
    return (
        <Accordion className='py-8' collapseAll>
            <Accordion.Panel>
                <Accordion.Title>What is Print Hub Finder?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Print Hub Finder is a offline printing service sharing application. You may be a service provider and/or a service receiver you are highly welcomed here.

                    </p>
                    {/* <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to&nbsp;
                        <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            get started&nbsp;
                        </a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p> */}
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Is there a home delivery option available?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, there is an option to get a delivery to your home.
                    </p>
                    {/* <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p> */}
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>How will pay for the service?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        You may availe both cashOnDelivery and/or mobiles(MFS) or cards prepayments.
                    </p>
                    {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tailwindui.com/"
                                rel="nofollow"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                Tailwind UI
                            </a>
                        </li>
                    </ul> */}
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default FaqSection;