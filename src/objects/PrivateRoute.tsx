import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from '../tools/Authentication';

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute