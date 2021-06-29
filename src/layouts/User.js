import React from "react";
import { Button, Grid, Table ,Image} from "semantic-ui-react";
import { useParams } from "react-router";

let cvData = JSON.parse(localStorage.getItem("cv"));


export default function User() {
  let { id } = useParams();
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Photo</Table.HeaderCell>
                <Table.HeaderCell>Article</Table.HeaderCell>
                <Table.HeaderCell>GitHub</Table.HeaderCell>
                <Table.HeaderCell>LinkedIn</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Image src={cvData.photo} size="small" />
                </Table.Cell>
                <Table.Cell>{cvData.article}</Table.Cell>
                <Table.Cell>{cvData.github}</Table.Cell>
                <Table.Cell>{cvData.linkedln}</Table.Cell>
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
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    </div>
  );
}
