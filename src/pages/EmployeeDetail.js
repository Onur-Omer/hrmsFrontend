import React, { useEffect, useState } from "react";
import NaviEmployee from "../layouts/NaviEmployee";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Grid, Image, Card, Icon, Segment, Button } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";
import CvService from "../services/CvService"

export default function EmployeeDetail() {
  let { id } = useParams();
  const [employee, SetEmployee] = useState([]);
  const [cvs, SetCvs] = useState([]);

  useEffect(() => {
      let cvService = new CvService();
      cvService
        .getAllByEmployee_EmployeeId(id)
        .then((result) => SetCvs(result.data.data));
    });
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getByEmployeeId(id)
      .then((result) => SetEmployee(result.data.data));
  });

  return (
    <div>
      <NaviEmployee />
      <Grid centered>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
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
            <Link to={`/cvShow${id}`}>
              <Button basic color="green">
                Show Cv {index}
              </Button>
            </Link>
            </div>
          </Card.Content>
          ))}
          <Card.Content extra>
          <div className="ui buttons">
            
            <Link to={`/cvAdd${id}`}>
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
