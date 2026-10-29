import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

export const metaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMetaDta: build.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
      providesTags: [tagTypes.meta],
    })
  }),
});

export const {
  useGetMetaDtaQuery
} = metaApi;
