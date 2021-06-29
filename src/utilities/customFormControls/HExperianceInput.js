import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid } from "semantic-ui-react";

import HDateInput from "./HDateInput";
import HTextInput from "./HTextInput";

const initialValues = {
  experiance: [
    {
      finishDate: "",
      startDate: "",
      position: "",
      workplaceName: "",
    },
  ],
};

const cvAddSchema = Yup.object().shape({
  experiances: Yup.array().of(
    Yup.object().shape({
      position: Yup.string().required("Bu alanın doldurulması zorunludur"),
      workplaceName: Yup.string().required("Bu alanın doldurulması zorunludur"),
      finishDate: Yup.date()
        .nullable()
        .required("Bu alanın doldurulması zorunludur"),
      startDate: Yup.date().required("Bu alanın doldurulması zorunludur"),
    })
  ),
});
export default function HExperianceInput() {
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
          <Grid columns={5} divided>
            <Grid.Column>
              <HTextInput
                name={`experiance.workplaceName`}
                placeholder="Where"
              />
            </Grid.Column>
            <Grid.Column>
              <HTextInput name={`experiance.position`} placeholder="Position" />
            </Grid.Column>
            <Grid.Column>
              <HDateInput name={`experiance.startDate`} />
            </Grid.Column>
            <Grid.Column>
              <HDateInput name={`experiance.finishDate`} />
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
