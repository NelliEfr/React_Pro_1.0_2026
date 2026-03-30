import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from '6-shared/lib/authContext';

export const SignOut: FC = () => {
    const navigate = useNavigate();

    const { logout } = useAuthContext();

    useEffect(() => {
        logout();

        navigate('/');
    }, [logout, navigate]);

    return null;
};
