import React from "react";
import NaviMain from "../layouts/NaviMain";
import { Image, Grid, Header, Button } from "semantic-ui-react";

export default function Main() {
  return (
    <div>
      <NaviMain></NaviMain>
      <Grid
        verticalAlign="middle"
        columns={4}
        centered
        style={{ marginTop: "6em" }}
      >
        <Grid.Row>
          <Grid.Column>
            <Image
              size="medium"
              circular
              src="https://image.freepik.com/free-vector/illustration-loudspeaker_53876-37218.jpg"
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              HRMS
            </Header>
            <br />
            <Header as="h1" textAlign="center">
              Welcome to Java-React Project
            </Header>
            <br />
            <Button primary size="huge" fluid style={{ marginTop: "4em" }}>
              Advertisements
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Image
              size="medium"
              circular
              src="https://image.freepik.com/free-vector/business-idea-generation-plan-development-pensive-man-with-lightbulb-cartoon-character-technical-mindset-entrepreneurial-mind-brainstorming-process_335657-2104.jpg"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
