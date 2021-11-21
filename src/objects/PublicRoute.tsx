import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from '../tools/Authentication';

const PublicRoute = () => {
    return !isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute