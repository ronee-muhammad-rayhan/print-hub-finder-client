import { Link } from "react-router-dom";

const CallToActionSection = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leadi text-center">Sign up now</h1>
                    <p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                        <Link to={`/register`}><button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button></Link>
                        <Link to={`/services`}><button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Learn more</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallToActionSection;