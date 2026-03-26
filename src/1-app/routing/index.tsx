import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import { MainPage } from '2-pages/Main';
import { NotFoundPage } from '2-pages/NotFound';
import { ProfileLazyPage } from '2-pages/Profile';
import { SignInPage } from '2-pages/SignIn';
import { SignOutPage } from '2-pages/SignOut';
import { SignUpPage } from '2-pages/SignUp';
// import { useContextAuthStrategy } from '6-shared/lib/useContextAuthStrategy';
// import { withProtection } from '6-shared/lib/withProtection';
// import { ProtectionWrapper } from '6-shared/ui/ProtectionWrapper';
import { App } from '../App';

// const ProfilePageLazy = lazy(async () => {
//     const component = await import('2-pages/Profile');

//     return {
//         default: component.ProfilePage,
//     };
// });

// const ProfilePageLazy = lazy(() => import('2-pages/Profile').then((module) => ({ default: module.ProfilePage })))

// const ProfilePageWithProtection = withProtection(ProfilePage, useContextAuthStrategy);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'profile',
                element: (
                    <Suspense fallback={<div>Suspense loading..</div>}>
                        <ProfileLazyPage />
                    </Suspense>
                ),
            },
            {
                path: 'signUp',
                element: <SignUpPage />,
            },
            {
                path: 'signIn',
                element: <SignInPage />,
            },
            {
                path: 'signOut',
                element: <SignOutPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
