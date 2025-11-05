import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PATH_FORGOT, PATH_REGISTER } from "../routes/routeConfig";
import { validUser } from "../constants/login";
import { loginSchema} from "../utils/validation";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

const Login = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState({ text: "", type: "" });

  const formik = useFormik({
    initialValues: {  
      email: "",  
      password: "",
    },
    validationSchema:loginSchema,

    onSubmit: (values) => {
      if (values.email === validUser.email && values.password === validUser.password) {
        setMessage({ text: "Login successful", type: "success" });
        formik.resetForm();
      } else {
        setMessage({ text: "Please enter valid email or password", type: "error" });
        formik.resetForm();
      }
    },
  });

  return (
    <div className="login-page">
      <h3>{t("loginPage.label")}</h3>

      <form onSubmit={formik.handleSubmit}>
        {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
        {formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}

        {message.text && (
          <p
            style={{
              color: message.type === "success" ? "green" : "red",
              fontWeight: "500",
              marginTop: "5px",
            }}
          >
            {message.text}
          </p>
        )}

        <input
          type="email"
          className="input-email"
          name="email"
          placeholder={t("loginPage.placeholder.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <input
          type="password"
          className="input-password"
          name="password"
          placeholder={t("loginPage.placeholder.password")}
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Link to={PATH_FORGOT}>
          <p style={{ marginBottom: "6px" }}>{t("loginPage.forgot")}</p>
        </Link>

        <button type="submit" className="login-btn">
          {t("loginPage.button.login")}
        </button>
      </form>

      <p style={{ marginTop: "5px" }}>
        {t("loginPage.heading")}{" "}
        <Link to={PATH_REGISTER} style={{ textDecoration: "none" }}>
          <span style={{ color: "blue", cursor: "pointer" }}>
            {t("loginPage.signup")}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
