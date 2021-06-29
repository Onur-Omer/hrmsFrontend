import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import AuthService from "../services/AuthService";
import HNumberInput from "../utilities/customFormControls/HNumberInput";
import HTextInput from "../utilities/customFormControls/HTextInput";
import HDateInput from "../utilities/customFormControls/HDateInput";
import NaviMain from "../layouts/NaviMain";
import { Link } from "react-router-dom";

export default function RegisterForEmployee() {
  let authService = new AuthService();

  const employeeRegisterSchema = Yup.object().shape({
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

  const initialValues = {
    birthDate: "",
    email: "",
    firstName: "",
    lastName: "",
    identityNumber: "",
    password: "",
  };

  return (
    <div>
      <NaviMain />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Register
          </Header>
          <Formik
            initialValues={initialValues}
            validationSchema={employeeRegisterSchema}
            onSubmit={(values) => {
              authService
                .RegisterEmployee(values)
                .then((result) => console.log(result.data.data));
            }}
          >
            <Form className="ui form">
              <Segment>
                <label>First Name</label>
                <HTextInput name="firstName" placeholder="First Name" />

                <label>Last Name</label>
                <HTextInput name="lastName" placeholder="Last Name" />

                <label>National Number</label>
                <HNumberInput
                  name="identityNumber"
                  placeholder="National Number"
                />

                <label>Birthdate</label>
                <HDateInput name="birthDate" />

                <label>Email</label>
                <HTextInput name="email" placeholder="Email" />

                <label>Password</label>
                <HTextInput name="password" placeholder="Password" />

                <Link to={`/loginForEmployee`}>
                  <Button color="green" type="submit">
                    Register
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Formik>
          <Segment>
            <Link to={`/registerForEmployer`}>
              <Button primary>Are you Employer?</Button>
            </Link>
            <Link to={`/registerForPersonel`}>
              <Button primary>For personel</Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
