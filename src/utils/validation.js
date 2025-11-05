import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const registrationSchema = Yup.object({
  firstname: Yup.string()
    .required('first name is required'),

  lastname: Yup.string()
    .required("last name is required"),

  email: Yup.string()
    .required('email is required')
    .email("Invalid email"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password contain at least one symbol")
    .required("Password is required"),

  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password does not match")
    .required("confirm password is required")
})