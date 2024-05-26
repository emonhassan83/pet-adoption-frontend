import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/user/users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    changeUserRole: build.mutation({
      query: ({ userId, newRole }) => ({
        url: `/user/${userId}/change-role`,
        method: "PATCH",
        body: { newRole },
      }),
      invalidatesTags: [],
    }),

    changeProfileStatus: build.mutation({
      query: ({ userId, newStatus }) => ({
        url: `/user/${userId}/status`,
        method: "PATCH",
        body: { newStatus },
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (updatedUserData) => ({
        url: "/user/profile",
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetMyProfileQuery,
  useChangeUserRoleMutation,
  useChangeProfileStatusMutation,
  useUpdateMyProfileMutation,
} = userApi;
