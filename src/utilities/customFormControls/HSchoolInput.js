import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid } from "semantic-ui-react";

import HDateInput from "./HDateInput";
import HTextInput from "./HTextInput";

const initialValues = {
  school: [
    {
      department: "",
      finishDateSchool: "",
      startDateSchool: "",
      name: "",
    },
  ],
};

const cvAddSchema = Yup.object().shape({
  schools: Yup.array().of(
    Yup.object().shape({
      department: Yup.string().required("Bu alanın doldurulması zorunludur"),
      finishDateSchool: Yup.date()
        .nullable()
        .required("Bu alanın doldurulması zorunludur"),
      startDateSchool: Yup.date().required("Bu alanın doldurulması zorunludur"),
      name: Yup.string().required("Bu alanın doldurulması zorunludur"),
    })
  ),
});
export default function HSchoolInput() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={cvAddSchema}
        onSubmit={(values) => {
          //cvService.addCv(values)
        }}
      >
        <Form className="ui form">
          <Grid columns={5}  divided>
            <Grid.Column>
              <HTextInput name={`school.name`} placeholder="School" />
            </Grid.Column>
            <Grid.Column>
              <HTextInput name={`school.department`} placeholder="Department" />
            </Grid.Column>
            <Grid.Column>
              <HDateInput name={`school.startDateSchool`} />
            </Grid.Column>
            <Grid.Column>
              <HDateInput name={`school.finishDateSchool`} />
            </Grid.Column>
            <Grid.Column>
              <Button
                basic
                color="green"
                //onClick={() => handleClickedCvNumber(index)}
              >
                Add
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
