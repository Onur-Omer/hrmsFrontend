import React from "react";
import * as Yup from "yup";
import { Button ,Grid,Header,Segment} from "semantic-ui-react";
import { Formik , Form} from "formik";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import HTextInput from "../utilities/customFormControls/HTextInput";
import NaviMain from "../layouts/NaviMain"

export default function LoginForPersonel() {
  let authService = new AuthService();

  const initialValues = { email: "", password: "" };

  // const history = useHistory();

  const personelLoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunlugunda olmalıdır"),
  });

  return (
    <div>
      <NaviMain/>
    
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in
      </Header>
    <Formik
      initialValues={initialValues}
      validationSchema={personelLoginSchema}
      onSubmit={(values) => {
        authService
        .loginForPersonel(values)
        .then(
          (result) =>
            localStorage.setItem(
              "user",
              JSON.stringify(result.data.data)
            ),
          localStorage.setItem("auth", "personel")
          )
      }}
    >
      <Form className="ui form" >
        <Segment>
        <HTextInput name="email" placeholder="Email" />
        <HTextInput name="password" placeholder="Password" />
        <Link to={`/advertisement`}>
                  <Button color="green" type="submit">
                    Login
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
