import { createBrowserRouter } from 'react-router';
import { App } from '1-app/App';
import { Example1Page } from '2-pages/Example1';
import { Example2Page } from '2-pages/Example2';
import { Example3Page } from '2-pages/Example3';
import { Example4Page } from '2-pages/Example4';
import { Example5Page } from '2-pages/Example5';
import { MainPage } from '2-pages/Main';
import { NotFoundPage } from '2-pages/NotFound';

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
                path: 'example1',
                element: <Example1Page />,
            },
            {
                path: 'example2',
                element: <Example2Page />,
            },
            {
                path: 'example3',
                element: <Example3Page />,
            },
            {
                path: 'example4',
                element: <Example4Page />,
            },
            {
                path: 'example5',
                element: <Example5Page />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
