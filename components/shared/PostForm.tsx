"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PostFormSchema } from "@/lib/validator";
import { Textarea } from "@/components/ui/textarea";
import { PostDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { FileUploader } from "./FileUploader";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { createPost, updatePost } from "@/lib/actions/post.actions";
import { IPost } from "@/lib/database/models/post.model";

type PostFormProps = {
  userId: string;
  type: "Create" | "Update";
  post?: IPost;
  postId?: string;
};

const PostForm = ({ userId, type, post, postId }: PostFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const initialValues =
    post && type === "Update"
      ? { ...post, createdAt: new Date() }
      : PostDefaultValues;
  const { startUpload } = useUploadThing("imageUploader");
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.

  // very very very very important
  async function onSubmit(values: z.infer<typeof PostFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }
    console.log(values);

    if (type === "Create") {
      try {
        const newPost = await createPost({
          post: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: "/profile",
        });

        if (newPost) {
          form.reset();
          router.push(`/posts/${newPost._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if(type === 'Update') {
      if(!postId) {
        router.back()
        return;
      }

      try {
        const updatedPost = await updatePost({
          userId,
          post: { ...values, imageUrl: uploadedImageUrl, _id: postId },
          path: `/posts/${postId}`
        })

        if(updatedPost) {
          form.reset();
          router.push(`/posts/${updatedPost._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  //.............................-----------------------------------------////////////////////

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10"
      >
        {/* title of the post */}
        <div className="w-[800px] max-sm:w-full">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="max-sm:w-full">
                <FormControl>
                  <Input
                    placeholder="Post title"
                    {...field}
                    className="p-5 vertical-center border-b h-[80px] text-[20px] font-semibold tracking-wider"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* title of the post */}

        {/* category of the post */}
        <div className="w-[800px] max-sm:w-full">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="max-sm:w-full text-[15px]">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* category of the post */}

        {/* description of the post */}
        <div className="w-[800px] max-sm:w-full">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="max-sm:w-full">
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="tracking-wider font-[16px] h-[50vh] rounded-2xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* description of the post */}

        {/* upload the file */}
        <div className="w-[800px] max-sm:w-full">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="max-sm:w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* upload the file */}
        <div className="w-[800px] max-sm:w-full">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="button col-span-2 w-full rounded-none "
          >
            {form.formState.isSubmitting ? "Submitting.." : `${type} post`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
