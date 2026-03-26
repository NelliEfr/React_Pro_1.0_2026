import type { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuthContext } from '6-shared/lib/authContext';

export const ProtectionWrapper: FC<PropsWithChildren> = ({ children }) => {
    const { accessToken } = useAuthContext();

    const location = useLocation();

    if (!accessToken) {
        return (
            <Navigate
                to={'/signIn'}
                state={{
                    fromUrl: location.pathname,
                }}
                replace={true}
            />
        );
    }

    return children;
};
