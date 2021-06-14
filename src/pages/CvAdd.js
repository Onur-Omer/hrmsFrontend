import { useFormik } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";
import { Grid, Header, Segment,Button } from "semantic-ui-react";

export default function CvAdd() {
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
    onSubmit: (values) => {
      console.log(values);
      //.....
      //...
      //---Todo---
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Grid stackable columns={1} centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Hakkında
            </Header>
            <Segment>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="photo"
                  label="Photo"
                  placeholder="Photo"
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="article"
                  label="Hakkında"
                  placeholder="Hakkında"
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="github"
                  label="Github"
                  placeholder="Github"
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="linkedIn"
                  label="LinkedIn"
                  placeholder="LinkedIn"
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2" textAlign="center">
              İş tecrübesi
            </Header>
            <Segment>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="finishDate"
                  label="Bitiş Tarihi"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="startDate"
                  label="Başlangıç Tarihi"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="position"
                  label="Pozisyon"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="workplaceName"
                  label="işyeri adı"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2" textAlign="center">
              Yabancı dil
            </Header>
            <Segment>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="language"
                  label="Yabancı dil"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="level"
                  label="Level"
                  placeholder="1-5"
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2" textAlign="center">
              Bilinen diller
            </Header>
            <Segment>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="usedLanguages"
                  label="Programlama dilleri"
                  placeholder="c# - java"
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2" textAlign="center">
              Okul
            </Header>
            <Segment>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="department"
                  label="Bölüm"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="finishDateSchool"
                  label="Bitiş tarihi"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="startDateSchool"
                  label="Başlangıç tarihi"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
                <Form.Input
                  fluid
                  name="name"
                  label="Okul adı"
                  placeholder="..."
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </Form>
      <Button fluid positive  onClick={formik.handleSubmit} >Ekle</Button>
    </div>
    
  );
  
}
