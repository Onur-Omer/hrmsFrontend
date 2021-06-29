import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button, Grid } from "semantic-ui-react";

import HTextInput from "./HTextInput";

const initialValues = {
    lang: [
        {
          usedLanguages: "",
        },
      ],
};

const cvAddSchema = Yup.object().shape({
    langs: Yup.array().of(
        Yup.object().shape({
          usedLanguages: Yup.string().required(
            "Bu alanın doldurulması zorunludur"
          ),
        })
      ),
});
export default function HLanguageInput() {
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
                name={`lang.usedLanguage`}
                placeholder="Programing Language"
              />
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
