import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import AuthService from "../services/AuthService";

export default function RegisterForEmployee() {
  let authService = new AuthService();

  const history = useHistory();

  const employeeLoginSchema = Yup.object().shape({
    birthDate: Yup.date().required("Doğum Tarihi zorunludur"),
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Soy isim zorunludur"),
    identityNumber: Yup.string()
      .required("Kimlik numarası zorunludur")
      .length(11, "Kımlık numarası hatalı")
      .matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  const formik = useFormik({
    initialValues: {
      birthDate: "",
      email: "",
      firstName: "",
      lastName: "",
      identityNumber: "",
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
                <b>Name</b>
              </label>

              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                type="text"
                value={formik.values.firstName}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.firstName}
                </div>
              )}

              <label>
                <b>Surname</b>
              </label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Surname"
                type="text"
                value={formik.values.lastName}
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.lastName}
                </div>
              )}

              <label>
                <b>Identity Number</b>
              </label>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="National Number"
                type="text"
                value={formik.values.identityNumber}
                name="identityNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.identityNumber &&
                formik.touched.identityNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.identityNumber}
                  </div>
                )}

              <label>
                <b>Birthday</b>
              </label>
              <Form.Input
                fluid
                icon="calendar times"
                iconPosition="left"
                placeholder="Birthday"
                type="date"
                error={Boolean(formik.errors.birthDate)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "birthDate")
                }
                value={formik.values.birthDate}
                onBlur={formik.handleBlur}
                name="birthDate"
              />
              {formik.errors.birthDate && formik.touched.birthDate && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.birthDate}
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
                placeholder="password"
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
      <Button floated='right'>Right Floated</Button>
    </div>
  );
}
