import { RequestStatus } from "@prisma/client";
import { z } from "zod";

const createAdoptionRequest = z.object({
  body: z.object({
    petId: z.string({
      error: "PetId is required!",
    }),
    petsHousehold: z.string({
      error: "Pets household is required!",
    }),
    petsNeutered: z.string({
      error: "Pets Neutered is required!",
    }),
    secureOutdoorArea: z.string({
      error: "Secure outdoor area is required!",
    }),
    animalSleep: z.string({
      error: "Animal sleep is required!",
    }),
    animalAlonePeriodsTime: z.string({
      error: "Animal alone periods time is required!",
    }),
    detailsSupport: z.string({
      error: "Details support time is required!",
    }),
    petOwnershipExperience: z.string({
      error: "Pet Ownership Experience is required!",
    }),
  }),
});

const updateAdoptionRequest = z.object({
  body: z.object({
    petId: z
      .string({
        error: "PetId is required!",
      })
      .optional(),
    petsHousehold: z
      .string({
        error: "Pets household is required!",
      })
      .optional(),
    petsNeutered: z
      .string({
        error: "Pets Neutered is required!",
      })
      .optional(),
    secureOutdoorArea: z
      .string({
        error: "Secure outdoor area is required!",
      })
      .optional(),
    animalSleep: z
      .string({
        error: "Animal sleep is required!",
      })
      .optional(),
    animalAlonePeriodsTime: z
      .string({
        error: "Animal alone periods time is required!",
      })
      .optional(),
    detailsSupport: z
      .string({
        error: "Details support time is required!",
      })
      .optional(),
    petOwnershipExperience: z
      .string({
        error: "Pet Ownership Experience is required!",
      })
      .optional(),
  }),
});

const updateAdoptionRequestStatus = z.object({
  body: z.object({
    status: z.enum([
      RequestStatus.PENDING,
      RequestStatus.APPROVED,
      RequestStatus.REJECTED,
    ]),
  }),
});

export const adoptionRequestSchema = {
  createAdoptionRequest,
  updateAdoptionRequest,
  updateAdoptionRequestStatus,
};
