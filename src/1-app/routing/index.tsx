import { createBrowserRouter } from 'react-router';
import { App } from '1-app/App';
import { FormikPage } from '2-pages/Formik/';
import { MainPage } from '2-pages/Main';
import { NotFoundPage } from '2-pages/NotFound';
import { RHFPage } from '2-pages/RHF';

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
                path: 'formik',
                element: <FormikPage />,
            },

            {
                path: 'rhf',
                element: <RHFPage />,
            },

            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
