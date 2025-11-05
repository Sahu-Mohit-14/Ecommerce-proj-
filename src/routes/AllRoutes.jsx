import React from "react"
import { PATH_LOGIN, PATH_REGISTER, PATH_FORGOT, PATH_RESETPASSWORD } from "./routeConfig"

import Login from "../page/Login"
import Register from "../page/Register"
import ForgotPassword from "../page/ForgotPassword"
import ResetPassword from "../page/ResetPassword"

export const allRoutes = [
  { path: PATH_LOGIN, element: <Login /> },
  { path: PATH_REGISTER, element: <Register /> },
  { path: PATH_FORGOT, element: <ForgotPassword /> },
  { path: PATH_RESETPASSWORD, element: <ResetPassword /> }
]