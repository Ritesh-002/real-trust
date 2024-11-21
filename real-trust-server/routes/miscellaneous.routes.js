import { Router } from "express";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import { getAllContacts, submitContactForm } from "../controllers/contact.controllers.js";


const miscellaneousRoutes = Router();

miscellaneousRoutes.post('/', submitContactForm)
miscellaneousRoutes.get('/', isLoggedIn, authorizeRoles('ADMIN'), getAllContacts)

export default miscellaneousRoutes;