import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (newRequest) => ({
        url: "/adoption-requests",
        method: "POST",
        body: newRequest,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    getAllAdoptionRequests: build.query({
      query: () => ({
        url: "/adoption-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),

    getMyAdoptionRequests: build.query({
      query: () => ({
        url: "/adoption-requests/my-adoption",
        method: "GET",
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),

    updateAdoptionRequest: build.mutation({
      query: ({ requestId, updateData }) => ({
        url: `/adoption-requests/${requestId}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    updateAdoptionRequestStatus: build.mutation({
      query: ({ requestId, statusData }) => ({
        url: `/adoption-requests/${requestId}/status`,
        method: "PATCH",
        body: statusData,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    deleteAdoptionRequest: build.mutation({
      query: (requestId) => ({
        url: `/adoption-requests/${requestId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAllAdoptionRequestsQuery,
  useGetMyAdoptionRequestsQuery,
  useUpdateAdoptionRequestMutation,
  useUpdateAdoptionRequestStatusMutation,
  useDeleteAdoptionRequestMutation,
} = adoptionRequestApi;
