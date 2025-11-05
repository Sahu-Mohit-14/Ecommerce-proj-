import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH_LOGIN } from '../routes/routeConfig';
import { registrationSchema } from '../utils/validation';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

function Register() {
  const { t } = useTranslation();
  const [message, setMessage] = useState({ text: "", type: "" });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      setMessage({ text: "Registration Successful", type: "Success" });
      console.log(values)
    }
  });

  return (
    <div className="register-page">
      <h3>{t('registerPage.label')}</h3>
      {message.text && (
        <p style={{ color: message.type === "error" ? "red" : "green" }}>
          {message.text}
        </p>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div className='name' style={{ display: 'flex' }}>
          {formik.errors.firstname && <p style={{ color: 'red' }}>{formik.errors.firstname}</p>}
          <input
            type="text"
            className='input-name'
            placeholder={t('registerPage.placeholder.firstname')}
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />

          {formik.errors.lastname && <p style={{ color: 'red' }}>{formik.errors.lastname}</p>}
          <input
            type="text"
            className='input-name'
            placeholder={t('registerPage.placeholder.lastname')}
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
        </div >

        {formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
        <input
          type="text"
          placeholder={t('loginPage.placeholder.email')}
          className='input-email'
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}
        <input
          type="password"
          placeholder={t('registerPage.placeholder.password')}
          name="password"
          className='input-password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        {formik.errors.confirmPassword && <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>}
        <input
          type="password"
          placeholder={t('registerPage.placeholder.confirmPassword')}
          name="confirmPassword"
          className='input-password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />

        <button type="submit" className="register-btn">
          {t('registerPage.button.register')}
        </button>

      </form>

      <p style={{ marginTop: '5px' }}>
        {t('registerPage.heading')}{' '}
        <Link to={PATH_LOGIN} style={{ textDecoration: 'none' }}>
          <span style={{ color: 'blue', cursor: 'pointer' }}>
            {t('registerPage.login')}
          </span>
        </Link>
      </p>
    </div>
  );
}

export default Register;
