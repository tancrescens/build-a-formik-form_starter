import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (!isValidEmail(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) errors.password = "Field required";

      return errors;
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}></form>
      <div>Email</div>
      <input
        name="email"
        id="emailField"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      ></input>
      {formik.errors.email ? (
        <div id="emailError" style={{ color: "red" }}>
          {formik.errors.email}
        </div>
      ) : null}

      <div>Password</div>
      <input
        name="password"
        id="pswField"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      ></input>
      {formik.errors.password ? (
        <div id="pswError" style={{ color: "red" }}>
          {formik.errors.password}
        </div>
      ) : null}

      <button type="submit" id="submitBtn">
        Submit
      </button>
    </>
  );
}

export default App;
