import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (newPet) => ({
        url: "/pets",
        method: "POST",
        body: newPet,
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    getMyPets: build.query({
      query: () => ({
        url: "/pets/my-pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    getAPet: build.query({
      query: (petId) => ({
        url: `/pets/${petId}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: tagTypes.pet, id: arg }],
    }),

    updatePet: build.mutation({
      query: ({ petId, updateData }) => ({
        url: `/pets/${petId}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: tagTypes.pet, id: arg.petId },
      ],
    }),

    deletePet: build.mutation({
      query: (petId) => ({
        url: `/pets/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: tagTypes.pet, id: arg },
      ],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useGetAllPetsQuery,
  useGetMyPetsQuery,
  useGetAPetQuery,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petApi;
