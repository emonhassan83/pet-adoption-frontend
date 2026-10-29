import { UserRole, UserStatus } from "@prisma/client";
import { z } from "zod";

const createUser = z.object({
  body: z.object({
    name: z.string({
      error: "Name is required!",
    }),
    email: z.string({
      error: "Email is required!",
    }),
    password: z.string({
      error: "Password is required",
    }),
    contactNumber: z.string({
      error: "Contact number is required!",
    }),
    address: z.string({
      error: "Address is required",
    }),
  }),
});

const updateUser = z.object({
  body: z.object({
    name: z
      .string({
        error: "Name is required!",
      })
      .optional(),
    email: z
      .string({
        error: "Email is required!",
      })
      .optional(),
    profilePhoto: z
      .string({
        error: "Profile photo is required!",
      })
      .optional(),
    contactNumber: z
      .string({
        error: "Contact number is required!",
      })
      .optional(),
    address: z
      .string({
        error: "Address is required",
      })
      .optional(),
  }),
});

const updateStatus = z.object({
  body: z.object({
    status: z.enum([UserStatus.ACTIVE, UserStatus.BLOCKED, UserStatus.DELETED]),
  }),
});

const updateRole = z.object({
  body: z.object({
    role: z.enum([UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER]),
  }),
});

export const userValidation = {
  createUser,
  updateUser,
  updateStatus,
  updateRole,
};
