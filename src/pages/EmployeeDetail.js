import React from "react";
import NaviEmployee from "../layouts/NaviEmployee";
import { Link } from "react-router-dom";
import { Grid, Image, Card, Icon,  Button } from "semantic-ui-react";

import CvService from "../services/CvService"

export default function EmployeeDetail() {
  let cvService = new CvService();
  let employee=JSON.parse(localStorage.getItem("user"))
  

  cvService
  .getAllByEmployee_EmployeeId(1)
  .then((result) => localStorage.setItem("cvs",JSON.stringify(result.data.data)));

  let cvs=JSON.parse(localStorage.getItem("cvs"))


  return (
    <div>
      <NaviEmployee />
      <Grid centered>
        <Card>
          <Image
            src={cvs[0].photo}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>
              {employee.firstName} {employee.lastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{employee.identityNumber}</span>
            </Card.Meta>
            <Card.Description>{employee.email}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {employee.birthday}
            </a>
          </Card.Content>
          {cvs.map((cv,index)=>( 
          <Card.Content extra key={cv.employeeCvId}>
            <div className="ui  buttons">
            <Link to={`/cvShow2`}>
              <Button basic color="green">
                Show Cv {index}
              </Button>
            </Link>
            </div>
          </Card.Content>
          ))}
          <Card.Content extra>
          <div className="ui buttons">
            
            <Link to={`/cvAdd2`}>
              <Button basic color="red">
                Add
              </Button>
            </Link>
          </div>
          </Card.Content>
        </Card>
      </Grid>
    </div>
  );
}
