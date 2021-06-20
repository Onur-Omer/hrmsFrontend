import React from "react";
import {  useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import AuthService from "../services/AuthService";

export default function RegisterForEmployer() {
  let authService = new AuthService();

  const history = useHistory();

  const employeeLoginSchema = Yup.object().shape({
    companyName: Yup.string().required("İsim zorunludur"),
    website: Yup.string().required("Website zorunludur"),
    phone: Yup.string()
      .length(11, "0xxx ile başlayın")
      .matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),

    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),

    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      phone: "",
      website: "",
      password: "",
    },
    validationSchema: employeeLoginSchema,
    onSubmit: (values) => {
      authService
        .registerEmployee(values)
        .then((result) => console.log(result.data.data));
      //   history.push("/login")
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Register
            </Header>
            <Segment stacked>
              <label>
                <b>Company Name</b>
              </label>

              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Company Name"
                type="text"
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.companyName && formik.touched.companyName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.companyName}
                </div>
              )}

              <label>
                <b>Website</b>
              </label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Website"
                type="text"
                value={formik.values.website}
                name="website"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.website && formik.touched.website && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.website}
                </div>
              )}

              <label>
                <b>Phone</b>
              </label>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="Phone"
                type="text"
                value={formik.values.phone}
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone &&
                formik.touched.phone && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.phone}
                  </div>
                )}

              
              <label>
                <b>Email</b>
              </label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail adresi"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
              />
              {formik.errors.email && formik.touched.email && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.email}
                </div>
              )}

              <label>
                <b>Password</b>
              </label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
              />
              {formik.errors.password && formik.touched.password && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.password}
                </div>
              )}

              <Button color="teal" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Form>

    </div>
  );
}
