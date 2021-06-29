import React from "react";
import { Button, Grid,  Table } from "semantic-ui-react";
import HForeignLangInput from "../utilities/customFormControls/HForeignLangInput"
import { useParams } from "react-router";


let cvData = JSON.parse(localStorage.getItem("cv"));



export default function ForeignLanguages() {
  let { id } = useParams();
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Language</Table.HeaderCell>
                <Table.HeaderCell>Level</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cvData.foreignLanguages.map((cv,index) => (
                <Table.Row key={index}>
                  <Table.Cell>{cv.language}</Table.Cell>
                  <Table.Cell>{cv.level}</Table.Cell>
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
          <HForeignLangInput/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
