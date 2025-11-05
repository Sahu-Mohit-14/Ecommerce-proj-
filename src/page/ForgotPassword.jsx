import React from "react";
import { Link } from "react-router-dom";
import { PATH_LOGIN, PATH_RESETPASSWORD } from "../routes/routeConfig";
import { useTranslation } from "react-i18next";

function ForgotPassword() {
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
          {t("forgotPage.label")}
        </h1>

        <p className="text-sm text-white mb-6 ">
          {t("forgotPage.description")}
        </p>

        <div className="space-y-4 ">
          <input
            type="email"
            placeholder={t("forgotPage.placeholder")}
            className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-12 bg-white"
          />
          
          <button
            className="w-full h-10.5 py-1 bg-white text-blue-500 font-bold rounded-md transition-all duration-300 ease-in-out cursor-pointer text-sm "
          >
            <Link to={PATH_RESETPASSWORD}>
              {t("forgotPage.sendButton")}
            </Link>
          </button>

          <div className="text-sm">
            <Link
              to={PATH_LOGIN}
              className="hover:text-blue-600 transition underline-offset-2 hover:underline text-[#ffeb3b] "
            >
              {t("forgotPage.backToLogin")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
