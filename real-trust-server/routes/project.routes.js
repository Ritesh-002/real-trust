import { Router } from "express";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import { addNewProjects, getAllProjects } from "../controllers/project.controller.js";
import upload from "../middlewares/multer.middleware.js";
// import { getAllUsers, loginUser, signUpUser } from "../controllers/user.controller.js";
// import { loginValidator, signUpValidator, validate } from "../util/user.validations.js";

const projectRouter = Router();

projectRouter.get('/', getAllProjects)
projectRouter.post('/add-project', isLoggedIn, authorizeRoles('ADMIN'), upload.single("thumbnail"), addNewProjects)

export default projectRouter;