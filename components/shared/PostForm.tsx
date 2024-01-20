"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PostFormSchema } from "@/lib/validator";
import { PostDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";

type PostFormProps = {
  userId: string;
  type: "Create" | "Update";
};


const PostForm = ({ userId, type }: PostFormProps) => {

    const initialValues = PostDefaultValues;
  // 1. Define your form.
  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: initialValues
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof PostFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-10">

        {/* title of the post */}
        <div className="w-[800px] max-sm:w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="max-sm:w-full">
              <FormControl>
                <Input placeholder="Post title" {...field} className="p-5 vertical-center border-b h-[80px] text-[20px] font-semibold tracking-wider"/>
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
          name="title"
          render={({ field }) => (
            <FormItem className="max-sm:w-full">
              <FormControl>
                <Dropdown onChangeHandler = {field.onChange} value={field.value}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        {/* category of the post */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PostForm;
