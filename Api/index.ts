import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response, response } from 'express';
import express from 'express'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.json("helle from Prisma 🚀 Server ready at: http://localhost:3000⭐️");
});
app.post('/users',async(req : Request,res : Response)=>{
  const {_email,_name,_password,_userName,_discription,_image,_intrest,_LinkedInId,_githubId} = req.body;
    const data=await prisma.user.create({
    data:{
      name: _name,
      email:_email,
      password:_password,
      userName:_userName,
      discription:_discription,
      image:_image,
      intrest:_intrest,
      LinkedInId:_LinkedInId,
      githubId:_githubId
      }})
    return res.status(201).send(data);
});
app.post('/posts',async(req : Request,res : Response)=>{
  const {_content,_title,_author,_published,_authorId} = req.body;
    const data=await prisma.post.create({
    data:{
      title: _title,
      content:_content,
      published:_published,
      authorId:_authorId
      }})
    return res.status(201).send({data});
});
app.post('/comments',async(req : Request,res : Response)=>{
  const {_id,_commentContent,_postId,_authorId} = req.body;
    const data=await prisma.comment.create({
    data:{
      id: _id,
      commentContent:_commentContent,
      postId:_postId,
      userId:_authorId
      }})
    return res.status(201).send({data});
});


app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json({users})
})
app.get('/posts', async (req, res) => {
  const post = await prisma.post.findMany()
  res.json({post})
})
app.get('/comments', async (req, res) => {
  const comment = await prisma.comment.findMany()
  res.json({comment})
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
