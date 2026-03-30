import { useCallback, useMemo, useState, type ComponentType } from 'react';
import { JWT_ACCESS_LS_KEY, JWT_LS_KEY, JWT_REFRESH_LS_KEY, USER_INFO_LS_KEY } from '6-shared/config/constants';
import { AuthContext, createInitAuthInfo } from '6-shared/lib/authContext';
import { clearLS, loadFromLS, saveToLocaleStorage } from '6-shared/lib/localStorage';
import type { AuthContextModel, AuthInfo, AuthMethods } from '6-shared/model/auth';

export const withAuthProvider = (WrappedComponent: ComponentType) => () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>(() => {
        const tokens = loadFromLS<Record<'access' | 'refresh', string>>({
            key: JWT_LS_KEY,
        });

        const userInfo = loadFromLS<Omit<AuthInfo, 'accessToken' | 'refreshToken'>>({
            key: USER_INFO_LS_KEY,
        });

        return {
            accessToken: tokens?.access || '',
            refreshToken: tokens?.refresh || '',
            userId: userInfo?.userId || '',
            name: userInfo?.name,
        };
    });

    const login: AuthMethods['login'] = useCallback((authInfo) => {
        setAuthInfo(authInfo);

        const { refreshToken, accessToken, ...userInfo } = authInfo;

        saveToLocaleStorage({
            key: JWT_LS_KEY,
            state: {
                [JWT_ACCESS_LS_KEY]: accessToken,
                [JWT_REFRESH_LS_KEY]: refreshToken,
            },
        });

        saveToLocaleStorage({
            key: USER_INFO_LS_KEY,
            state: userInfo,
        });
    }, []);

    const logout: AuthMethods['logout'] = useCallback(() => {
        setAuthInfo(createInitAuthInfo());

        clearLS({
            key: JWT_LS_KEY,
        });
        clearLS({
            key: USER_INFO_LS_KEY,
        });
    }, []);

    const contextValue: AuthContextModel = useMemo(
        () => ({
            ...authInfo,
            login,
            logout,
        }),
        [authInfo, login, logout],
    );

    return (
        <AuthContext.Provider value={contextValue}>
            <WrappedComponent />
        </AuthContext.Provider>
    );
};
