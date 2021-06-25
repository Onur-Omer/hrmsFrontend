import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import AuthService from "../services/AuthService";
import HNumberInput from "../utilities/customFormControls/HNumberInput";
import HTextInput from "../utilities/customFormControls/HTextInput";
import HDateInput from "../utilities/customFormControls/HDateInput";



export default function RegisterForEmployer() {
  let authService = new AuthService();

  const history = useHistory();

  const employerRegisterSchema = Yup.object().shape({
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

  const  initialValues= {
      companyName: "",
      email: "",
      phone: "",
      website: "",
      password: "",
    }
   

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={employerRegisterSchema}
          onSubmit={(values) => {
            authService
              .RegisterEmployer(values)
              .then((result) => console.log(result.data.data));
          }}
        >
          <Form className="ui form">
            <Segment>
            
              <label>Company Name</label>
              <HTextInput name="companyName" placeholder="Company Name" />

              <label>Website</label>
              <HTextInput name="website" placeholder="Your Website" />

              <label>Phone</label>
              <HTextInput
                name="phone"
                placeholder="Phone Number"
              />

              <label>Email</label>
              <HTextInput name="email" placeholder="Email" />

              <label>Password</label>
              <HTextInput name="password" placeholder="Password" />

              <Button color="green" type="submit">
                Register
              </Button>
            </Segment>
          </Form>
        </Formik>
      </Grid.Column>
    </Grid>
  );
}
