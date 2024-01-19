import * as z from "zod";

export const PostFormSchema = z.object({
    title : z.string().min(10, "Title must be atleast 10 characters"),
    description : z.string().min(10, "Description must be atleast 10 characters").max(3000, "Description must be less than 3000 characters"),
    imageUrl : z.string(),
    categoryId : z.string(),
  });
  