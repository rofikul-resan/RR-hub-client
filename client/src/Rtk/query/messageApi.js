import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "../../utils";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}/messages`,
  }),
  endpoints: (builder) => ({
    getChatUser: builder.query({
      query: (id) => `/user?userId=${id}`,
    }),
  }),
});

export const { useGetChatUserQuery } = messageApi;
