import { z } from "zod";

const createCommentSchema = z.object({
  body: z.object({
    content: z.string({
      error: "Comment content is required!",
    }),
    blogId: z.string({
      error: "Comment blogId is required!",
    }),
    userId: z.string({
      error: "Comment userId is required!",
    }),
  }),
});

const updateCommentSchema = z.object({
  body: z.object({
    content: z.string({
        error: "Comment content is required!",
      }).optional(),
      blogId: z.string({
        error: "Comment blogId is required!",
      }).optional(),
      userId: z.string({
        error: "Comment userId is required!",
      }).optional(),
  }),
});

export const commentValidation = {
  createCommentSchema,
  updateCommentSchema,
};
