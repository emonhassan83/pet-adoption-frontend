import { z } from "zod";

const createBlogSchema = z.object({
  body: z.object({
    userId: z.string({
      error: "User id is required!",
    }),
    title: z.string({
      error: "Blog title is required!",
    }),
    description: z.string({
      error: "Blog description is required!",
    }),
    image: z.string({
      error: "Blog image is required!",
    }),
    reference: z.string({
      error: "Blog reference is required!",
    }),
    tags: z.array(z.string({
      error: "Blog tags is required!",
    })),
    category: z.string({
      error: "Blog category is required!",
    })
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    title: z.string({
      error: "Blog title is required!",
    }).optional(),
    description: z.string({
      error: "Blog description is required!",
    }).optional(),
    image: z.string({
      error: "Blog image is required!",
    }).optional(),
    reference: z.string({
      error: "Blog reference is required!",
    }).optional(),
    tags: z.array(z.string({
      error: "Blog tags is required!",
    })).optional(),
    category: z.string({
      error: "Blog category is required!",
    }).optional(),
    status: z.string({
      error: "Blog status is required!",
    }).optional(),
    like: z.number({
      error: "Blog views is required!",
    }).optional(),
  }),
});

export const blogValidation = {
  createBlogSchema,
  updateBlogSchema,
};
