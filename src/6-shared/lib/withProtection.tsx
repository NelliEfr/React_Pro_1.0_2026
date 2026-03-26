import type { ComponentType, FC } from 'react';
import { Navigate, useLocation } from 'react-router';
import type { UseAuthStrategy } from '6-shared/model/auth';

export const withProtection = <P extends object>(
    WrappedComponent: ComponentType<P>,
    useAuthStrategy: UseAuthStrategy,
) => {
    const EnhancedComponent: FC<P> = (props) => {
        const { isAuthenticated, isReady } = useAuthStrategy();

        const location = useLocation();

        if (!isReady) {
            return <div>Loading...</div>;
        }

        if (!isAuthenticated) {
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

        return <WrappedComponent {...props} />;
    };

    EnhancedComponent.displayName = `withProtection${WrappedComponent.displayName}`;

    return EnhancedComponent;
};
