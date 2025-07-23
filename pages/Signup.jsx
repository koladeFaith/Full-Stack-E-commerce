import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required"),
    }),
  });
  console.log(formik.touched);

  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.firstName ? (
          <span className="text-danger">{formik.errors.firstName}</span>
        ) : null}
        <br /> <br />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.lastName ? (
          <span className="text-danger">{formik.errors.lastName}</span>
        ) : null}
        <br /> <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email ? (
          <span className="text-danger">{formik.errors.email}</span>
        ) : null}
        <br /> <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.password ? (
          <span className="text-danger">{formik.errors.password}</span>
        ) : null}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
