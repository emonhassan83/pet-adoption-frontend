import { z } from "zod";

const createPet = z.object({
  body: z.object({
    name: z.string({
      error: "Name is required!",
    }),
    image: z.string({
      error: "Image is required!",
    }),
    species: z.string({
      error: "Species is required!",
    }),
    breed: z.string({
      error: "Breed is required!",
    }),
    color: z.string({
      error: "Color is required!",
    }),
    age: z.number({
      error: "Age is required!",
    }),
    gender: z.string({
      error: "Gender is required!",
    }),
    size: z.string({
      error: "Size is required!",
    }),
    location: z.string({
      error: "Location is required!",
    }),
    description: z.string({
      error: "Description is required!",
    }),
    temperament: z.string({
      error: "Temperament is required!",
    }),
    medicalHistory: z.string({
      error: "Medical History is required!",
    }),
    healthStatus: z.string({
      error: "Health status is required!",
    }),
    adoptionRequirements: z.string({
      error: "Adoption Requirements is required!",
    }),
  }),
});

const updatePet = z.object({
  body: z.object({
    name: z.string({
      error: "Name is required!",
    }).optional(),
    image: z.string({
      error: "Image is required!",
    }).optional(),
    species: z.string({
      error: "Species is required!",
    }).optional(),
    breed: z.string({
      error: "Breed is required!",
    }).optional(),
    color: z.string({
      error: "Color is required!",
    }).optional(),
    age: z.number({
      error: "Age is required!",
    }).optional(),
    gender: z.string({
      error: "Gender is required!",
    }).optional(),
    size: z.string({
      error: "Size is required!",
    }).optional(),
    location: z.string({
      error: "Location is required!",
    }).optional(),
    description: z.string({
      error: "Description is required!",
    }).optional(),
    temperament: z.string({
      error: "Temperament is required!",
    }).optional(),
    medicalHistory: z.string({
      error: "Medical History is required!",
    }).optional(),
    healthStatus: z.string({
      error: "Health status is required!",
    }).optional(),
    adoptionRequirements: z.string({
      error: "Adoption Requirements is required!",
    }).optional(),
  }),
});

export const petValidation = {
  createPet,
  updatePet,
};
