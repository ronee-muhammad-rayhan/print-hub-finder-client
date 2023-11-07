import PropTypes from "prop-types"
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>;
    }

    if (!loading && !user?.email) {
        return <Navigate to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.any
}

export default PrivateRoute;
