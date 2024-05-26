import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery } = userApi;