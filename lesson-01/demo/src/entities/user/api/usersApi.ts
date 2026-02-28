import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model/types';
import { baseApi } from 'shared/api/baseApi';

// export const usersApi = createApi({
//  reducerPath: 'usersApi',
//  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
//  tagTypes: ['Users'],
//  endpoints: (build) => ({
//    getUsers: build.query<User[], void>({
//      query: () => 'users',
//      transformResponse: (response: { users: User[] }) => response.users,
//      providesTags: ['Users'],
//    })
//  }),
// });

export const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getUsers: build.query<User[], void>({
        query: () => 'users',
        transformResponse: (resp: { users: User[] }) => resp.users,
        providesTags: ['Users'],
      }),
    //   deleteUser: build.mutation<DeleteResponse, number>({
    //     query: (id) => ({ url: `users/${id}`, method: 'DELETE' }),
    //     invalidatesTags: ['Users'],
    //   }),
    }),
    overrideExisting: false,
});
 


export const { useGetUsersQuery } = usersApi;