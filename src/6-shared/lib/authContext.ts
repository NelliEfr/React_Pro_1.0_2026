import { createContext, useContext } from 'react';
import type { AuthContextModel, AuthInfo } from '6-shared/model/auth';

export const createInitAuthInfo = (): AuthInfo => ({
    accessToken: '',
    refreshToken: '',
    userId: '',
    name: '',
});

export const AuthContext = createContext<AuthContextModel>({
    ...createInitAuthInfo(),
    login: () => {},
    logout: () => {},
});

export const useAuthContext = () => {
    const authContextInfo = useContext(AuthContext);

    if (!authContextInfo) {
        throw new Error('useAuthContext должен использоваться только внутри AuthProvider');
    }

    return authContextInfo;
};
