import { Router } from "express";
import { emailValidator, loginValidator, signUpValidator, validate } from "../util/user.validations.js";
import { addNewUser, getAllSubscriptionEmails, getAllUsers, loginUser, logoutUser, signUpUser, subscribeEmail } from "../controllers/user.controllers.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
// import { getAllUsers, loginUser, signUpUser } from "../controllers/user.controller.js";
// import { loginValidator, signUpValidator, validate } from "../util/user.validations.js";

const userRouter = Router();

userRouter.get('/', getAllUsers)
userRouter.post('/signup', validate(signUpValidator), signUpUser)
userRouter.get('/logout', logoutUser)
userRouter.post('/login', validate(loginValidator), loginUser)
userRouter.post('/add-user', validate(signUpValidator), isLoggedIn, authorizeRoles('ADMIN'), addNewUser)
userRouter.get('/all-subscription-emails', isLoggedIn, authorizeRoles('ADMIN'), getAllSubscriptionEmails)
userRouter.post('/subscribe-newsletter', validate(emailValidator), isLoggedIn, subscribeEmail)

export default userRouter;