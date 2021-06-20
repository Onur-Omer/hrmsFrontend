import { useFormik, FieldArray, Field } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
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
      langs: [
        {
          usedLanguages: "",
        },
      ],
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
            <Segment stacked>
              <label>
                <b>Photo</b>
              </label>
              <Form.Input
                fluid
                icon="image"
                iconPosition="left"
                type="text"
                value={formik.values.photo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="photo"
              />
              {formik.errors.photo && formik.touched.photo && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.photo}
                </div>
              )}

              <label>
                <b>Github</b>
              </label>
              <Form.Input
                fluid
                icon="github"
                iconPosition="left"
                placeholder="Github"
                type="text"
                value={formik.values.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="github"
              />
              {formik.errors.github && formik.touched.github && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.github}
                </div>
              )}

              <label>
                <b>LinkedIn</b>
              </label>
              <Form.Input
                fluid
                icon="linkedin"
                iconPosition="left"
                placeholder="LinkedIn"
                type="text"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="linkedIn"
              />
              {formik.errors.linkedIn && formik.touched.linkedIn && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.linkedIn}
                </div>
              )}

              <label>
                <b>Article</b>
              </label>
              <Form.Input
                fluid
                icon="paragraph"
                iconPosition="left"
                placeholder="About you..."
                type="text"
                value={formik.values.article}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="article"
              />
              {formik.errors.article && formik.touched.article && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.article}
                </div>
              )}

              <Header as="h4" color="blue" textAlign="center">
                Experiances
              </Header>

              <label>
                <b>Workplace Name</b>
              </label>
              <Form.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="Workplace Name"
                type="text"
                value={formik.values.workplaceName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="workplaceName"
              />
              {formik.errors.workplaceName && formik.touched.workplaceName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workplaceName}
                </div>
              )}

              <label>
                <b>Position</b>
              </label>
              <Form.Input
                fluid
                icon="osi"
                iconPosition="left"
                placeholder="Position"
                type="text"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="position"
              />
              {formik.errors.position && formik.touched.position && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.position}
                </div>
              )}

              <label>
                <b>Start Date</b>
              </label>
              <Form.Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Start Date"
                type="date"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="startDate"
              />
              {formik.errors.startDate && formik.touched.startDate && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.startDate}
                </div>
              )}

              <label>
                <b>Finish Date</b>
              </label>
              <Form.Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Finish Date"
                type="date"
                value={formik.values.finishDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="finishDate"
              />
              {formik.errors.finishDate && formik.touched.finishDate && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.finishDate}
                </div>
              )}

              <Header as="h4" color="blue" textAlign="center">
                Foreign Languages
              </Header>

              <label>
                <b>Language</b>
              </label>
              <Form.Input
                fluid
                icon="language"
                iconPosition="left"
                placeholder="Language"
                type="text"
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="language"
              />
              {formik.errors.language && formik.touched.language && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.language}
                </div>
              )}

              <label>
                <b>Level</b>
              </label>
              <Form.Input
                fluid
                icon="arrow right"
                iconPosition="left"
                placeholder="Level"
                type="number"
                value={formik.values.level}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="level"
              />
              {formik.errors.level && formik.touched.level && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.level}
                </div>
              )}

              <Header as="h4" color="blue" textAlign="center">
                Programing Languages
              </Header>

              <label>
                <b>Languages</b>
              </label>

              {formik.values.langs.map((lang, index) => (
                <Form.Input
                  fluid
                  icon="js"
                  iconPosition="left"
                  placeholder="Languages"
                  type="email"
                  value={formik.values.usedLanguages}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="usedLanguages"
                />
              ))}

              <button
                type="button"
                className="secondary"
                onClick={() => formik.values.langs.push({ usedLanguages: "" })}
              >
                Add
              </button>

              <button
                type="button"
                className="secondary"
                onClick={() => formik.values.langs.pop()}
              >
                Delete
              </button>

              <Header as="h4" color="blue" textAlign="center">
                Education
              </Header>

              <label>
                <b>School</b>
              </label>
              <Form.Input
                fluid
                icon="student"
                iconPosition="left"
                placeholder="School Name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
              />
              {formik.errors.name && formik.touched.name && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.name}
                </div>
              )}

              <label>
                <b>Department</b>
              </label>
              <Form.Input
                fluid
                icon="idea"
                iconPosition="left"
                placeholder="Department"
                type="text"
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="department"
              />
              {formik.errors.department && formik.touched.department && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.department}
                </div>
              )}

              <label>
                <b>Start Date</b>
              </label>
              <Form.Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Start Date"
                type="date"
                value={formik.values.startDateSchool}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="startDateSchool"
              />
              {formik.errors.startDateSchool &&
                formik.touched.startDateSchool && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.startDateSchool}
                  </div>
                )}

              <label>
                <b>Finish Date</b>
              </label>
              <Form.Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Finish Date"
                type="date"
                value={formik.values.finishDateSchool}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="finishDateSchool"
              />
              {formik.errors.finishDateSchool &&
                formik.touched.finishDateSchool && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.finishDateSchool}
                  </div>
                )}

              <Button color="teal" fluid size="large" type="submit">
                Add
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Form>
    </div>
  );
}
