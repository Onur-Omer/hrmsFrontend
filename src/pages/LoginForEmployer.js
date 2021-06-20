import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import AuthService from "../services/AuthService"

export default function LoginForEmployer() {

  let authService = new AuthService();

  const history = useHistory();

  const employeeLoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(4, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: employeeLoginSchema,
    onSubmit: (values) => {
      console.log(values);
        authService.loginForEmployer(values).then((result)=> console.log(result.data.data))
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
              Login
            </Header>
            <Segment stacked>
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
                <b>Şifre</b>
              </label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre"
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
      <Button floated='right' primary>For Personel</Button>
    </div>
  );
}
