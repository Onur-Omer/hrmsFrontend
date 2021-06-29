import React from "react";
import * as Yup from "yup";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import HTextInput from "../utilities/customFormControls/HTextInput";
import NaviMain from "../layouts/NaviMain";
import { useHistory } from "react-router";

export default function LoginForEmployee() {
  let authService = new AuthService();
  const history = useHistory()
  const initialValues = { email: "", password: "" };

  const employeeLoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(4, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

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
            Log-in
          </Header>
          <Formik
            initialValues={initialValues}
            validationSchema={employeeLoginSchema}
            onSubmit={(values) => {
              authService
                .loginForEmployee(values)
                .then(
                  (result) =>
                    localStorage.setItem(
                      "user",
                      JSON.stringify(result.data.data),
                      localStorage.setItem("auth", "employee"),
                    ),
                  
                  history.push("/advertisement")
                );
            }}
          >
            <Form className="ui form">
              <Segment>
                <HTextInput name="email" placeholder="Email" />
                <HTextInput name="password" placeholder="Password" />
                
                  <Button color="green" type="submit">
                    Login
                  </Button>
               
              </Segment>
            </Form>
          </Formik>
          <Segment>
            <Link to={`/loginForEmployer`}>
              <Button primary>Are you Employer?</Button>
            </Link>
            <Link to={`/loginForPersonel`}>
              <Button primary>For personel</Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
