import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type UserSliceState = {
    currentUser?: unknown;
};

type RootState = {
    user?: UserSliceState;
};

type ProtectedRouteProps = {
    children: ReactNode;
    redirectTo: string;
};

const ProtectedRoute = ({ children, redirectTo }: ProtectedRouteProps) => {
    const currentUser = useSelector((state: RootState) => state.user?.currentUser);

    return currentUser ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

export default ProtectedRoute