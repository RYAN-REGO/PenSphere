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