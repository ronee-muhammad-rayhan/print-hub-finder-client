import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TitleHelmet from "../../components/ui/TitleHelmet";

const MySchedules = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [pendingWorks, setPendingWorks] = useState([]);
    useEffect(() => {
        axios.get(`https://b8a11-server-print-hub-finder.vercel.app/my-schedules/bookings?email=${user?.email}`, { withCredentials: true })
            .then((response) => {
                setBookings(response.data);
            })
    }, [user?.email]);
    useEffect(() => {
        axios.get(`https://b8a11-server-print-hub-finder.vercel.app/my-schedules/pending-works?email=${user?.email}`, { withCredentials: true })
            .then((response) => {
                setPendingWorks(response.data);
            })
    }, [user?.email]);
    return (
        <div>
            <TitleHelmet title='PrintHubFinder | MySchedules'></TitleHelmet>
            <h2 className="text-5xl font-bold text-center py-8">MySchedules</h2>
            {/* Bookings Section => /my-schedules/bookings -> get */}
            <h3 className="text-3xl font-bold text-center pb-4">My Booking: {bookings?.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 justify-between">
                {
                    bookings.length > 0 ? bookings?.map(booking => <div key={booking._id}>
                        <div className="flex flex-col items-center text-center bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] h-[428px] py-6">
                            <div className="grow">
                                <div className="h-48"><img className="w-full h-48  object-contain" src={booking.image} alt="Image Description" /></div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {booking.nameOfService}
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        {booking.description}
                                    </p>
                                    <h3>Price: ${booking.price}</h3>
                                </div>
                            </div>

                        </div>
                    </div>) : <div className="text-center">No Bookings</div>
                }
            </div>
            {/* PendingWorks Section => /my-schedules/pending-works update->patch */}
            <h3 className="text-3xl font-bold text-center">My Pending Works: {pendingWorks?.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 justify-between">
                {
                    pendingWorks.length > 0 ? pendingWorks?.map(bookinpendingWorks => <div key={bookinpendingWorks._id}>
                        <div className="flex flex-col items-center text-center bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] h-[428px] py-6">
                            <div className="grow">
                                <div className="h-48"><img className="w-full h-48  object-contain" src={bookinpendingWorks.image} alt="Image Description" /></div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {bookinpendingWorks.nameOfService}
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        {bookinpendingWorks.description}
                                    </p>
                                    <h3>Price: ${bookinpendingWorks.price}</h3>
                                </div>
                            </div>

                        </div>
                    </div>) : <div className="text-center">No Pending Work</div>
                }
            </div>
        </div>
    );
};

export default MySchedules;