import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// ** Validation Schema
const myFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long")
    .max(20, "Name should not exceed 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone number should be at least 10 characters")
    .max(15, "Phone number should not exceed 15 characters")
    .required("Phone is required"),
  city: Yup.string().required("City is required"),
});

function FormData() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          city: "",
        }}
        validationSchema={myFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "20%",
              margin: "0 auto",
              marginTop: "100px",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" />
              {errors.name && touched.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              {errors.email && touched.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" />
              {errors.phone && touched.phone && (
                <div style={{ color: "red" }}>{errors.phone}</div>
              )}
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city">City</label>
              <Field name="city" />
              {errors.city && touched.city && (
                <div style={{ color: "red" }}>{errors.city}</div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormData;
