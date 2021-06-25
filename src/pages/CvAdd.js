import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";
import {
  Button,
  Grid,
  GridColumn,
  Header,
  Segment,
  Label,
} from "semantic-ui-react";

import HNumberInput from "../utilities/customFormControls/HNumberInput";
import HTextInput from "../utilities/customFormControls/HTextInput";
import HDateInput from "../utilities/customFormControls/HDateInput";

import CvService from "../services/CvService";

export default function CvAdd() {
  let cvService = new CvService();

  const cvAddSchema = Yup.object().shape({
    article: Yup.string().required("Bu alanın doldurulması zorunludur"),
    github: Yup.string(),
    linkedIn: Yup.string(),
    photo: Yup.string(),

    //---
    experiances: Yup.array().of(
      Yup.object().shape({
        position: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workplaceName: Yup.string().required(
          "Bu alanın doldurulması zorunludur"
        ),
        finishDate: Yup.date()
          .nullable()
          .required("Bu alanın doldurulması zorunludur"),
        startDate: Yup.date().required("Bu alanın doldurulması zorunludur"),
      })
    ),

    //----
    foreignLanguages: Yup.array().of(
      Yup.object().shape({
        language: Yup.string().required("Bu alanın doldurulması zorunludur"),
        level: Yup.string()
          .required("Bu alanın doldurulması zorunludur")
          .min(1, "1-5")
          .max(5, "1-5"),
      })
    ),

    //------
    langs: Yup.array().of(
      Yup.object().shape({
        usedLanguages: Yup.string().required(
          "Bu alanın doldurulması zorunludur"
        ),
      })
    ),

    //------
    schools: Yup.array().of(
      Yup.object().shape({
        department: Yup.string().required("Bu alanın doldurulması zorunludur"),
        finishDateSchool: Yup.date()
          .nullable()
          .required("Bu alanın doldurulması zorunludur"),
        startDateSchool: Yup.date().required(
          "Bu alanın doldurulması zorunludur"
        ),
        name: Yup.string().required("Bu alanın doldurulması zorunludur"),
      })
    ),
  });

  const initialValues = {
    article: "",
    github: "",
    linkedIn: "",
    photo: "",
    //--experiances
    experiances: [
      {
        finishDate: "",
        startDate: "",
        position: "",
        workplaceName: "",
      },
    ],

    //--foreignLangs
    foreignLanguages: [
      {
        language: "",
        level: "",
      },
    ],

    //--langs
    langs: [
      {
        usedLanguages: "",
      },
    ],
    //--schools
    schools: [
      {
        department: "",
        finishDateSchool: "",
        startDateSchool: "",
        name: "",
      },
    ],
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={cvAddSchema}
        onSubmit={(values) => {
          cvService.addCv(values)
        }}
      >
        <Form className="ui form">
          <Grid columns={5} textAlign="center" style={{ marginTop: "4em" }}>
            <Grid.Row>
              <Header as="h2" color="teal" textAlign="center">
                Cv
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Label>About You</Label>
                <Segment>
                  <label>Your Photo</label>
                  <HTextInput name="photo" placeholder="Photo" />

                  <label>Github</label>
                  <HTextInput name="github" placeholder="Github adress" />

                  <label>LinkedIn</label>
                  <HTextInput name="linkedIn" placeholder="LinkedIn adress" />

                  <label>Article</label>
                  <HTextInput name="article" placeholder="About you" />
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Label>Experiances</Label>
                <Segment>
                  <FieldArray name="experiances">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { experiances } = values;

                      return (
                        <div>
                          {experiances.map((experiance, index) => (
                            <div key={index}>
                              <label>Workplace name</label>
                              <HTextInput
                                name={`experiances[${index}].workplaceName`}
                                placeholder="Where"
                              />

                              <label>Position</label>
                              <HTextInput
                                name={`experiances[${index}].position`}
                                placeholder="Position"
                              />

                              <label>Start Date</label>
                              <HDateInput
                                name={`experiances[${index}].startDate`}
                              />

                              <label>Finish Date</label>
                              <HDateInput
                                name={`experiances[${index}].finishDate`}
                              />

                              <Button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            onClick={() =>
                              push({
                                finishDate: "",
                                startDate: "",
                                position: "",
                                workplaceName: "",
                              })
                            }
                          >
                            Add
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Label>Foreign Languages</Label>
                <Segment>
                  <FieldArray name="foreignLanguages">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { foreignLanguages } = values;

                      return (
                        <div>
                          {foreignLanguages.map((lang, index) => (
                            <div key={index}>
                              <label>Languages</label>
                              <HTextInput
                                name={`foreignLanguages.[${index}].language`}
                                placeholder="Language"
                              />

                              <label>Level</label>
                              <HNumberInput
                                name={`foreignLanguages.[${index}].level`}
                                placeholder="1-5"
                              />

                              <Button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            onClick={() => push({ language: "", level: "" })}
                          >
                            Add
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Label>Schools</Label>
                <Segment>
                  <FieldArray name="schools">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { schools } = values;

                      return (
                        <div>
                          {schools.map((school, index) => (
                            <div key={index}>
                              <label>School Name</label>
                              <HTextInput
                                name={`schools[${index}].name`}
                                placeholder="School name"
                              />

                              <label>Department</label>
                              <HTextInput
                                name={`schools[${index}].department`}
                                placeholder="Department name"
                              />

                              <label>Start Date</label>
                              <HDateInput
                                name={`schools[${index}].startDateSchool`}
                              />

                              <label>Finish Date</label>
                              <HDateInput
                                name={`schools[${index}].finishDateSchool`}
                              />

                              <Button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            onClick={() =>
                              push({
                                department: "",
                                finishDateSchool: "",
                                startDateSchool: "",
                                name: "",
                              })
                            }
                          >
                            Add
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Label>Programing Languages</Label>
                <Segment>
                  <FieldArray name="langs">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { langs } = values;

                      return (
                        <div>
                          {langs.map((lang, index) => (
                            <div key={index}>
                              <label>Language</label>
                              <HTextInput
                                name={`langs[${index}].usedLanguages`}
                                placeholder="C# , Java"
                              />

                              <Button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </div>
                          ))}
                          <Button
                            type="button"
                            onClick={() => push({ usedLanguages: "" })}
                          >
                            Add
                          </Button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Button color="green" type="submit">
                Finish
              </Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
