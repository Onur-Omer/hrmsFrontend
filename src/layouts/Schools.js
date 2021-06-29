import React from "react";
import { Button, Grid,  Table } from "semantic-ui-react";
import HSchoolInput from "../utilities/customFormControls/HSchoolInput"
import { useParams } from "react-router";


let cvData = JSON.parse(localStorage.getItem("cv"));



export default function Schools() {
  let { id } = useParams();
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>School</Table.HeaderCell>
                <Table.HeaderCell>Department</Table.HeaderCell>
                <Table.HeaderCell>Start date</Table.HeaderCell>
                <Table.HeaderCell>Finish date</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cvData.schools.map((cv,index) => (
               
                <Table.Row key={index}>
                  <Table.Cell>{cv.name}</Table.Cell>
                  <Table.Cell>{cv.department}</Table.Cell>
                  <Table.Cell>{cv.startDateSchool}</Table.Cell>
                  <Table.Cell>{cv.finishDateSchool}</Table.Cell>
                  <Table.Cell>
                    <Button.Group>
                      <Button
                        basic
                        color="green"
                        //onClick={() => handleClickedCvNumber(index)}
                      >
                        Edit
                      </Button>

                      <Button.Or />

                      <Button
                        basic
                        color="red"
                        //onClick={() => handleClickedCvNumber(index)}
                      >
                        Delete
                      </Button>
                    </Button.Group>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <HSchoolInput/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
