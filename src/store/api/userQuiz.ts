import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userQuiz = createApi({
    reducerPath: "quiz",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"
  , credentials: "include"
 }),
    tagTypes: ["Quiz"],
    endpoints(builder) {
      return {
        quizzes: builder.query<Record<string,any> | null, void>({
          query: () => "/api/quizzes",
          providesTags:["Quiz"],
        })
      };
    },
  });

  export const { useQuizzesQuery } = userQuiz;
