import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
function FormikYup() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (value) => { },
        validationSchema: Yup.object({
            username: Yup.string()
                .required()
                .max(15, "username must be < 15 char")
                .min(3, "username must be > 3 char"),
            password: Yup.string()
                .required()
                .max(20, "password must be < 20 char")
                .min(8, "password must be > 8 char"),
        }),
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formik.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : ""}
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default FormikYup;
