import React, { useEffect, useState } from "react";
import NaviEmployee from "../layouts/NaviEmployee";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Grid, Image, Card, Icon, Segment, Button } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeDetail() {
  let { id } = useParams();
  const [employee, SetEmployee] = useState({});

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
          <Card.Content extra>
          <div className="ui two buttons">
            <Link to={`/cvShow${id}`}>
              <Button basic color="green">
                Show Cv
              </Button>
            </Link>
            <Link to={`/cvAdd${id}`}>
              <Button basic color="red">
                Add/Update Cv
              </Button>
            </Link>
          </div>
          </Card.Content>
        </Card>
      </Grid>
    </div>
  );
}
