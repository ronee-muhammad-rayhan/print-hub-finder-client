import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TitleHelmet from "../../components/ui/TitleHelmet";

const MySchedules = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState();
    const [pendingWorks, setPendingWorks] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5003/my-schedules/bookings?email=${user?.email}`, { withCredentials: true })
            .then((response) => {
                setBookings(response.data);
            })
    }, [user?.email]);
    useEffect(() => {
        axios.get(`http://localhost:5003/my-schedules/pending-works?email=${user?.email}`, { withCredentials: true })
            .then((response) => {
                setPendingWorks(response.data);
            })
    }, [user?.email]);
    return (
        <div>
            <TitleHelmet title='PrintHubFinder | MySchedules'></TitleHelmet>
            MySchedules
            {/* Bookings Section => /my-schedules/bookings -> get */}
            <h3>{bookings.length}</h3>
            {/* PendingWorks Section => /my-schedules/pending-works update->patch */}
            <h3>{pendingWorks.length}</h3>
        </div>
    );
};

export default MySchedules;