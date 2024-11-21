import { Router } from "express";
import userRouter from "./user.routes.js";
import projectRouter from "./project.routes.js";
import miscellaneousRoutes from "./miscellaneous.routes.js";
// import chatRouter from "./chat.routes.js";

const appRouter = Router();

appRouter.use('/users', userRouter)
appRouter.use('/projects', projectRouter)
appRouter.use('/contact', miscellaneousRoutes)

export default appRouter