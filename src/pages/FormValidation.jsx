import React from "react";
import { Formik, Form, Field } from "formik";
import "../App.css";
import * as Yup from "yup";``

const signinSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(2, "Password must be at least 2 characters")
    .max(10, "Password must be at most 10 characters")
    .required("Password is required"),
  firstName: Yup.string().required("First name is required"),
});

function FormValidation() {
  return (
    <div className="flex flex-row justify-center items-center mx-auto w-full h-screen">
      <Formik
        initialValues={{
          username: "",
          password: "",
          firstName: "",
          menu: "",
        }}
        validationSchema={signinSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="p-6 border rounded-lg shadow-lg w-96">
            <h1 className="text-3xl font-semibold text-center mb-4">
              User Registration
            </h1>

            {/* Username */}
            <div className="block col-span-5 mt-3">
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                className="block mt-2 px-2 py-2 border w-full rounded"
                placeholder="Enter username"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm mt-1">{errors.username}</div>
              )}
            </div>

            {/* Password */}
            <div className="block col-span-5 mt-3">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className="block mt-2 px-2 py-2 border w-full rounded"
                placeholder="Enter password"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            {/* First Name */}
            <div className="block col-span-5 mt-4">
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                placeholder="Enter first name"
                className="block mt-2 px-2 py-2 border w-full rounded"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>
              )}
            </div>

            {/* Food Menu */}
            <div className="block col-span-5 mt-4">
              <label htmlFor="menu">Food Menu</label>
              <Field
                as="select"
                name="menu"
                className="block mt-2 px-2 py-2 border w-full rounded"
              >
                <option value="">Select an option</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </Field>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-3 py-3 w-full mt-4"
            >
              Submit Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormValidation;
