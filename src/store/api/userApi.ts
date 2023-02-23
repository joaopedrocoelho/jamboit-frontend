import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"
  , credentials: "include"
 }),
    tagTypes: ["User"],
    endpoints(builder) {
      return {
        authenticate: builder.query<Record<string,any> | null, void>({
          query: () => "/api/authenticate",
          providesTags:["User"],
          transformResponse: (response: Record<string,any>) => {
            const data = response.data ? JSON.parse(response.data) : undefined;
            return {
              status: response.status,
              message: response.message,
              error: response.error,
              data: data,
            };
          },
          
         transformErrorResponse: (response: Record<string,any>) => {
            
            return {
              status: response.status,
              message: response.message,
              error: response.error,
              data: {},
            };
        }
        }),
        login: builder.query<Record<string,any>, void>({
          query: () => "/login",
        }),
      };
    },
  });

  export const {useAuthenticateQuery, useLoginQuery } = userApi;
