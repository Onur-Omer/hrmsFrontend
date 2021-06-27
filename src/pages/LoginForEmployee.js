import React from "react";
import * as Yup from "yup";
import { Button ,Grid,Header,Segment} from "semantic-ui-react";
import { Formik , Form} from "formik";
import AuthService from "../services/AuthService";
import HTextInput from "../utilities/customFormControls/HTextInput";

export default function LoginForEmployee() {
  let authService = new AuthService();

  const initialValues = { email: "", password: "" };

  function handleLogin() {
    
  } 

  const employeeLoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in
      </Header>
    <Formik
      initialValues={initialValues}
      validationSchema={employeeLoginSchema}
      onSubmit={(values) => {
        authService
          .loginForEmployee(values)
          .then((result) => console.log(result.data.data));
      }}
    >
      <Form className="ui form" >
        <Segment>
        <HTextInput name="email" placeholder="Email" />
        <HTextInput name="password" placeholder="Password" />
        <Button color="green" type="submit">
          Login
        </Button>
        </Segment>
      </Form>
    </Formik>
    </Grid.Column>
  </Grid>
  );
}
