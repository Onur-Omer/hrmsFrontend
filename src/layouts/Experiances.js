import React from "react";
import { Button, Grid,  Table } from "semantic-ui-react";
import HExperianceInput from "../utilities/customFormControls/HExperianceInput";
import { useParams } from "react-router";


let experienceData = JSON.parse(localStorage.getItem("cv"));


export default function Experiances() {
  let { id } = useParams();
  
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Company</Table.HeaderCell>
                <Table.HeaderCell>Position</Table.HeaderCell>
                <Table.HeaderCell>Start date</Table.HeaderCell>
                <Table.HeaderCell>Finish date</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {experienceData.experiances.map((experiance,index) => (
                <Table.Row key={index}>
                  <Table.Cell>{experiance.workplaceName}</Table.Cell>
                  <Table.Cell>{experiance.position}</Table.Cell>
                  <Table.Cell>{experiance.startDate}</Table.Cell>
                  <Table.Cell>{experiance.finishDate}</Table.Cell>
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
          <HExperianceInput/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
