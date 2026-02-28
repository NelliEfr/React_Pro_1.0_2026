import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api', // единый путь для всего проекта
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    tagTypes: ['Users', 'Posts', 'Auth', '...'],
    endpoints: () => ({}),
});
