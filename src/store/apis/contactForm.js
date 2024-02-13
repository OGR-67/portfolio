import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactFormApi = createApi({
  reducerPath: "contactFormApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-api-lime.vercel.app/" }),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactFormApi;