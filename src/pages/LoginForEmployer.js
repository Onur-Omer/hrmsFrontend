import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Button ,Grid} from "semantic-ui-react";
import { Formik , Form} from "formik";
import AuthService from "../services/AuthService";
import HTextInput from "../utilities/customFormControls/HTextInput";

export default function LoginForEmployer() {
  let authService = new AuthService();

  const initialValues = { email: "", password: "" };

  // const history = useHistory();

  const employerLoginSchema = Yup.object().shape({
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
        <Image src='/logo.png' /> Log-in to your account
      </Header>
    <Formik
      initialValues={initialValues}
      validationSchema={employerLoginSchema}
      onSubmit={(values) => {
        authService
          .loginForEmployer(values)
          .then((result) => console.log(result.data.data));
      }}
    >
      <Form className="ui form" >
        <HTextInput name="email" placeholder="Email" />
        <HTextInput name="password" placeholder="Password" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
    </Grid.Column>
  </Grid>
  );
}
