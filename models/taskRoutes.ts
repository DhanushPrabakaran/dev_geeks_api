import { type } from "os"

export type user ={
    id: Number,
    email: String,
    name:  String,
    password: String,
    userName: String,
    discription: String,
    image: String,
    intrest: String[],
    instaId: String,
    TwitterId: String,
    FacebookId: String,
    LinkedInId: String,
    githubId: String,
    viewCount: Number,
    createdAt: Date,
    updatedAt: Date,
    posts: Post[]
  }
export type Post={
    id:Number,
    content:String,
    title: string,
    likes:Number,
    comments:Comment[],
    author:user,
    createdAt:Date,
    updatedAt:Date,
    viewCount: number,
    published: boolean,
    authorId: Number
  }
export type Comment={
    id:number,
    commentContent:string,
    postId:number,
    authorId:number,
    createdAt:Date,
    updatedAt:Date
    }
    // model comment {
    //   id       Int      @id @default(autoincrement())
    //   commentContent String
    //   post     Post     @relation(fields: [postId], references: [id])
    //   postId   Int
    //   author   User     @relation(fields: [userId], references: [id])
    //   userId   Int
    //   createdAt DateTime @default(now())
    //   updatedAt DateTime @updatedAt
    //   }