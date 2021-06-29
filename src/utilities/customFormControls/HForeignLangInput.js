import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid } from "semantic-ui-react";

import HTextInput from "./HTextInput";
import HNumberInput from "./HNumberInput"

const initialValues = {
  foreignLanguage: [
    {
      language: "",
      level: "",
    },
  ],
};

const cvAddSchema = Yup.object().shape({
  foreignLanguages: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required("Bu alanın doldurulması zorunludur"),
      level: Yup.string()
        .required("Bu alanın doldurulması zorunludur")
        .min(1, "1-5")
        .max(5, "1-5"),
    })
  ),
});
export default function HForeignLangInput() {
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
              <HTextInput
                name={`foreignLanguage.language`}
                placeholder="Language"
              />
            </Grid.Column>
            <Grid.Column>
              <HNumberInput name={`foreignLanguage.level`} placeholder="1-5" />
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
