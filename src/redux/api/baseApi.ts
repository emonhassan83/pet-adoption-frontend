import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://pet-adoption-project.vercel.app/api" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});