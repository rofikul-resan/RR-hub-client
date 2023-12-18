import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { serverUrl } from "../../utils";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverUrl}/user` }),
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (userData) => ({
        url : ``
      })
    }) 
  }),
});

export const {  } = userApi;
