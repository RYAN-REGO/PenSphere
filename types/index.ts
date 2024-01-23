// import { string } from "zod"

// ---- USER PARAMS
export type CreateUserParams = {
    clerkId : string
    firstName : string
    lastName : string
    username : string | null
    email : string
    photo : string
}

export type UpdateUserParams = {
    firstName : string 
    lastName : string
    username : string
    photo : string
}

// ------CATEGORY PARAMS
export type createCategoryParams = {
    categoryName : string
}

// ------ POST PARAMS
export type createPostParams = {
    userId: string
    post: {
      title: string
      description: string
      categoryId: string
      imageUrl: string
    }
    path: string
  }

  // ------ URL QUERY PARAMS
  export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  