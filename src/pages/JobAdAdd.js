import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../services/CityService";
import PositionService from "../services/PositionService";
import JobAdService from "../services/JobAdService";

export default function Deneme() {
  let jobAdService = new JobAdService();
  const JobAdvertAddSchema = Yup.object().shape({
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

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 3;
      jobAdService.add(values).then((result) => console.log(result.data.data));
    },
  });

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

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const positionOption = positions.map((position, index) => ({
    key: index,
    text: position.name,
    value: position.id,
  }));

  const workTimeOption = [
    { key: "f", text: "Yarı Zamanlı", value: "part-time" },
    { key: "s", text: "Tam Zamanlı", value: "full-time" },
  ];

  const workPlaceOption = [
    { key: "f", text: "Ofisde", value: "office" },
    { key: "s", text: "Evde", value: "home" },
  ];

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Input
                placeholder="Başlık"
                error={Boolean(formik.errors.title).toString()}
                value={formik.values.title}
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.title}
                </div>
              )}
            </Form.Field>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Dropdown
                clearable
                item
                placeholder="İş pozisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "positionId")
                }
                onBlur={formik.onBlur}
                id="positionId"
                value={formik.values.positionId}
                options={positionOption}
              />
              {formik.errors.positionId && formik.touched.positionId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.positionId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma yeri"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workPlaceId")
                }
                onBlur={formik.onBlur}
                id="workPlaceId"
                value={formik.values.workPlaceId}
                options={workPlaceOption}
              />
              {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workPlaceId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Süresi"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTimeId")
                }
                onBlur={formik.onBlur}
                id="workTimeId"
                value={formik.values.workTimeId}
                options={workTimeOption}
              />
              {formik.errors.workTimeId && formik.touched.workTimeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTimeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MİNİMUM"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MAKSİMUM"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    id="numberOfEmployee"
                    name="numberOfEmployee"
                    error={Boolean(formik.errors.numberOfEmployee)}
                    onChange={formik.handleChange}
                    value={formik.values.numberOfEmployee}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.numberOfEmployee &&
                    formik.touched.numberOfEmployee && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.numberOfEmployee}
                      </div>
                    )}
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "lastDate")
                    }
                    value={formik.values.lastDate}
                    onBlur={formik.handleBlur}
                    name="lastDate"
                    placeholder="Son başvuru tarihi"
                  />
                  {formik.errors.lastDate && formik.touched.lastDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastDate}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={4}>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.firstDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "firstDate")
                    }
                    value={formik.values.firstDate}
                    onBlur={formik.handleBlur}
                    name="firstDate"
                    placeholder="İlk başvuru tarihi"
                  />
                  {formik.errors.firstDate && formik.touched.firstDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.firstDate}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <TextArea
                placeholder="Açıklama"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
