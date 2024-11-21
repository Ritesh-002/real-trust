import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for(let validation of validations) {
            const result = await validation.run(req)
            if(!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            return next()
        }
        res.status(422).json({
            errors: errors.array()
        })
    }
}

export const emailValidator = [
    body("subscriptionEmail").notEmpty().withMessage("Email not entered"),
    body("subscriptionEmail").isEmail().withMessage("Email is invalid"),
]
export const signUpValidator = [
    body("fullName").notEmpty().withMessage("Name is required"),
    body("designation").notEmpty().withMessage("designation is required"),
    body("descriptionReview").notEmpty().withMessage("review is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").trim().isEmail().withMessage("Email is invalid"),
    body("password").trim().isLength({min: 8}).withMessage("password length must be more than 8 characters"),
]
export const loginValidator = [
    body("email").notEmpty().withMessage("Email is required"),
    body("email").trim().isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("password is required"),
]