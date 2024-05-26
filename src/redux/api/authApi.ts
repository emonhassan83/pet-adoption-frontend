import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (passwordData) => ({
        url: `/auth/change-password`,
        method: "POST",
        body: passwordData,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useChangePasswordMutation } = authApi;
