import React, { useEffect, useState } from "react";
import NaviEmployee from "../layouts/NaviEmployee";
//import { Route } from "react-router";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Card,
  Icon,
  Button,
  Label,
  Segment,

} from "semantic-ui-react";

import CvService from "../services/CvService";

export default function EmployeeDetail() {
  
  let employee = JSON.parse(localStorage.getItem("user"));
  
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getAllByEmployee_EmployeeId(employee.employeeId).then((result) => setCvs(result.data.data));
  }, []);
console.log(cvs)
 
  return (
    <div>
      <NaviEmployee />
      <Grid verticalAlign="middle" style={{ height: "100vh" }}>

        <Grid.Column width={3}></Grid.Column>

        <Grid.Column width={3}>

        <Grid.Row centered><Grid.Column width={3}>
          <Card>
            <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {employee.firstName} {employee.lastName}
              </Card.Header>

              <Card.Description>{employee.email}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              
                <Icon name="user" />
                {employee.birthday}
              
            </Card.Content>
          </Card>
        </Grid.Column>
        </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid divided>
            <Label>Your Cvs</Label>
            <Grid.Row >
              <Grid.Column>
                {cvs.map((cv, index) => (
                  <Segment key={index}>
                    <Button.Group>
                      <Label color="teal" floating>
                        {index + 1}
                      </Label>
                      <Link to={`/cvShow/${cv.employeeCvId}`}>
                        <Button
                        icon="edit"
                          basic
                          color="green"
                          
                        >
                        </Button>
                        </Link>
                      <Button.Or />
                      <Link to={`/cvAdd`}>
                        <Button
                        icon="download"
                          basic
                          color="red"
                          
                        >
                        </Button>
                      </Link>
                      <Button.Or />
                      <Link to={`/cvAdd`}>
                        <Button
                        icon="trash"
                          basic
                          color="red"

                        >
                        </Button>
                      </Link>
                    </Button.Group>
                  </Segment>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      
      </Grid>
    </div>
  );
}
