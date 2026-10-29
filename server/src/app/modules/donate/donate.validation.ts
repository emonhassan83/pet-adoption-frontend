import { z } from "zod";

const createDonationSchema = z.object({
  body: z.object({
    amount: z.string({
      error: "Comment amount is required!",
    }),
    currency: z.string({
      error: "Donate currency is required!",
    }),
    donorName: z.string({
      error: "Donate name is required!",
    }),
    donorEmail: z.string({
      error: "Donate email is required!",
    }),
    message: z.string({
      error: "Donate message is required!",
    }),
  }),
});

const updateDonationSchema = z.object({
  body: z.object({
    amount: z.string({
        error: "Comment amount is required!",
      }).optional(),
      currency: z.string({
        error: "Donate currency is required!",
      }).optional(),
      donorName: z.string({
        error: "Donate name is required!",
      }).optional(),
      donorEmail: z.string({
        error: "Donate email is required!",
      }).optional(),
      message: z.string({
        error: "Donate message is required!",
      }).optional(),
  }),
});

export const donationValidation = {
    createDonationSchema,
    updateDonationSchema,
};
