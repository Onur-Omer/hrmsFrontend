import { useFormik } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import CvService from "../services/CvService";

export default function CvAdd() {
  let cvService = new CvService();

  const cvAddSchema = Yup.object().shape({
    article: Yup.string().required("Bu alanın doldurulması zorunludur"),
    github: Yup.string(),
    linkedIn: Yup.string(),
    photo: Yup.string(),

    //---
    position: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workplaceName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    finishDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    startDate: Yup.date().required("Bu alanın doldurulması zorunludur"),

    //----
    language: Yup.string().required("Bu alanın doldurulması zorunludur"),
    level: Yup.string()
      .required("Bu alanın doldurulması zorunludur")
      .min(1, "1-5")
      .max(5, "1-5"),

    //------
    usedLanguages: Yup.string().required("Bu alanın doldurulması zorunludur"),

    //------
    department: Yup.string().required("Bu alanın doldurulması zorunludur"),
    finishDateSchool: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    startDateSchool: Yup.date().required("Bu alanın doldurulması zorunludur"),
    name: Yup.string().required("Bu alanın doldurulması zorunludur"),
  });

  const formik = useFormik({
    initialValues: {
      article: "",
      github: "",
      linkedIn: "",
      photo: "",
      //--experiances
      finishDate: "",
      startDate: "",
      position: "",
      workplaceName: "",
      //--foreignLangs
      language: "",
      level: "",
      //--langs
      usedLanguages: "",
      //--schools
      department: "",
      finishDateSchool: "",
      startDateSchool: "",
      name: "",
    },
    validationSchema: cvAddSchema,
    onSubmit: (values) => {
      console.log(values);
      //.....
      //...
      //---Todo---
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
              Add Your Cv
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
    </div>
  );
}
