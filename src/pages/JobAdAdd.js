import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Segment, Grid, Header ,Label} from "semantic-ui-react";
import CityService from "../services/CityService";
import PositionService from "../services/PositionService";
import JobAdService from "../services/JobAdService";
import HTextInput from "../utilities/customFormControls/HTextInput";
import HDateInput from "../utilities/customFormControls/HDateInput";
import HNumberInput from "../utilities/customFormControls/HNumberInput";

export default function Deneme() {
  let jobAdService = new JobAdService();

  const jobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    firstDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    title: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    numberOfEmployee: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });

  const initialValues = {
    description: "",
    positionId: "",
    workTimeId: "",
    workPlaceId: "",
    numberOfEmployee: "",
    cityId: "",
    minSalary: "",
    maxSalary: "",
    firstDate: "",
    lastDate: "",
    title: "",
  };

  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let positionService = new PositionService();

    cityService.getAll().then((result) => setCities(result.data.data));
    positionService
      .getAllPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

 


  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Add Advertisement
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={jobAdvertAddSchema}
          onSubmit={(values) => {
            values.employerId = 3;
            jobAdService
              .add(values)
              .then((result) => console.log(result.data.data));
          }}
        >
          <Form className="ui form">
            <Segment>
         
              <label>Title</label>
              <HTextInput name="title" placeholder="Title" />

              <label>Description</label>
              <HTextInput name="description" placeholder="Please explain..." />

              <label>Position</label>
              <Field as="select" name="positionId">
                {positions.map((position) => (
                  <option value="${position.id}">{position.name}</option>
                ))}
              </Field>

              <label>City</label>
              <Field as="select" name="cityId">
                {cities.map((city) => (
                  <option value="${city.id}">{city.name}</option>
                ))}
              </Field>

              <label>Work Type</label>
              <Field as="select" name="workTimeId">
                
                  <option value="part-time">Part time</option>
                  <option value="full-time">Full time</option>
                
              </Field>


              <label>Work Place</label>
              <Field as="select" name="workPlaceId">
                
                  <option value="office">Office</option>
                  <option value="home">Home</option>
                
              </Field>

              <label>Quantity</label>
              <HNumberInput name="numberOfEmployee" placeholder="How many workers" />

              <label>Minimum Salary</label>
              <HNumberInput name="minSalary" placeholder="Minimum Salary" />

              <label>Maximum Salary</label>
              <HNumberInput name="maxSalary" placeholder="Maximum Salary" />

              <label>First Date</label>
              <HDateInput name="firstDate"/>

              <label>Last Date</label>
              <HDateInput name="lastDate"/>

              <Button color="green" type="submit">
                Finish
              </Button>

              {/* const initialValues = {


    firstDate: "",
    lastDate: "",

  }; */}
            </Segment>
          </Form>
        </Formik>
      </Grid.Column>
    </Grid>
  );
}
