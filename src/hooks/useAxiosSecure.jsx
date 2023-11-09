import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://b8a11-server-print-hub-finder.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
}
export default useAxiosSecure;