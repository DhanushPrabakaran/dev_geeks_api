// import { Router, Request, Response } from 'express';
// import { taskRoutes } from '../../models/taskRoutes';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const router: Router = Router({ mergeParams: true });

// let tasks: taskRoutes[] = [];
// router.get('/data/:id', async (req: Request, res: Response) => {
//   const _id : number = Number(req.params.id)
//   try {
//     let tasks = await prisma.post.findMany({ where: { id: _id}, include:{
//       title:true} });
//       if (!tasks || !tasks[0]) throw Error('No Tasks Found');
//       return res.status(200).json(tasks);
//       } catch (err) {
//         console.log(err);
//         return res.status(404).send(err.message);
//         }
//         });


// // Add your CRUD API implementation here
//   router.get('/', (req: Request, res: Response) => {
//     res.json(tasks);
//   });

//   router.post('/', (req: Request, res: Response) => {
//     const task: taskRoutes = {
//       id: tasks.length + 1,
//       title: req.body.title,
//       description: req.body.description,
//       completed: false,
//     };
  
//     tasks.push(task);
//     res.status(201).json(task);
//   });
  
//   router.get('/:id', (req: Request, res: Response) => {
//     const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
//     if (!task) {
//       res.status(404).send('Task not found');
//     } else {
//       res.json(task);
//     }
//   });
//   router.put('/:id', (req: Request, res: Response) => {
//     const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
//     if (!task) {
//       res.status(404).send('Task not found');
//     } else {
//       task.title = req.body.title || task.title;
//       task.description = req.body.description || task.description;
//       task.completed = req.body.completed || task.completed;
  
//       res.json(task);
//     }
//   });
//   router.delete('/:id', (req: Request, res: Response) => {
//     const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  
//     if (index === -1) {
//       res.status(404).send('Task not found');
//     } else {
//       tasks.splice(index, 1);
//       res.status(204).send();
//     }
//   });
// export default router;