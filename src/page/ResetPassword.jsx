
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATH_LOGIN } from "../routes/routeConfig";

function ResetPassword() {
  const location = useLocation();
  // console.log("location is", location)
  const queryParams = new URLSearchParams(location.search)
  // console.log("query param are ", queryParams)
  const token = queryParams.get("token")
  console.log("token", token)

  const { t } = useTranslation()
  return (
    <div
      className="flex items-center justify-center min-h-screen"
    >
      {/* Forgot Password Card */}
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-2xl text-center"
        style={{ background: "linear-gradient(135deg, #a1b1c2, #357abd)" }}
      >
        <h1 className="text-2xl font-bold mb-3 text-white">
          {t("ResetPasswordPage.label")}
        </h1>

        <div className="space-y-4 ">
          <input
            type="password"
            placeholder={t("ResetPasswordPage.placeholder.password")}
            className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-12 bg-white"
          />

          <input
            type="password"
            placeholder={t("ResetPasswordPage.placeholder.confirmPassword")}
            className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-12 bg-white"
          />

          <p className="text-white">
            {token ? `Token: ${token}` : "No url found"}
          </p>

          <button
            className="w-full h-10.5 py-1 bg-white text-blue-500 font-bold rounded-md transition-all duration-300 ease-in-out cursor-pointer text-sm "
          >
            <Link to={PATH_LOGIN}>
              {t("ResetPasswordPage.button")}
            </Link>
          </button>

        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
