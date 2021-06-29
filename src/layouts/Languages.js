import React from "react";
import { Button, Grid,  Table } from "semantic-ui-react";
import HLanguageInput from "../utilities/customFormControls/HLanguageInput"
import { useParams } from "react-router";


let cvData = JSON.parse(localStorage.getItem("cv"));




export default function Languages() {
  let { id } = useParams();
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Language</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cvData.langs.map((cv,index) => (
                <Table.Row key={index}>
                  <Table.Cell>{cv.usedLanguages}</Table.Cell>
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
          <HLanguageInput/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
