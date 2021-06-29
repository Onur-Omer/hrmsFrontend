import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import AuthService from "../services/AuthService";
import HTextInput from "../utilities/customFormControls/HTextInput";
import NaviMain from "../layouts/NaviMain";
import { Link } from "react-router-dom";

export default function RegisterForPersonel() {
  let authService = new AuthService();

  const personelRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Website zorunludur"),
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),

    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  const initialValues = {
    firstName: "",
    email: "",
    lastName: "",
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
            validationSchema={personelRegisterSchema}
            onSubmit={(values) => {
              authService
                .registerPersonel(values)
                .then((result) => console.log(result.data.data));
            }}
          >
            <Form className="ui form">
              <Segment>
                <label>First Name</label>
                <HTextInput name="firstName" placeholder="Name" />

                <label>Last Name</label>
                <HTextInput name="lastName" placeholder="Surname" />

                <label>Email</label>
                <HTextInput name="email" placeholder="Email" />

                <label>Password</label>
                <HTextInput name="password" placeholder="Password" />

                <Link to={`/loginForPersonel`}>
                  <Button color="green" type="submit">
                    Register
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Formik>
        </Grid.Column>
      </Grid>
    </div>
  );
}
