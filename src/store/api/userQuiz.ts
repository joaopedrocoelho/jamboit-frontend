import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { forms_v1 } from "googleapis";

export const userQuiz = createApi({
    reducerPath: "quiz",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"
  , credentials: "include"
 }),
    tagTypes: ["Quiz"],
    endpoints(builder) {
      return {
        quizzes: builder.query<forms_v1.Schema$Form[]| null, void>({
          query: () => "/api/quizzes",
          providesTags:["Quiz"],
        })
      };
    },
  });

  export const { useQuizzesQuery } = userQuiz;
