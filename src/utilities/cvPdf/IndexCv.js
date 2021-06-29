import React from "react";
import { Header, Icon, Grid } from "semantic-ui-react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import {
  Text,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Headers from "./Header";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

let cvData = JSON.parse(localStorage.getItem("cvs"));
let clickedCv = JSON.parse(localStorage.getItem("clickedCv"));

const Resume = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Page size="A4" style={styles.page}>
      <Headers />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image src={cvData[clickedCv].photo} style={styles.image} />
          <Education />
          <Skills />
        </View>
        <Experience />
      </View>
      <Text style={styles.footer}>
        This IS the candidate you are looking for
      </Text>
    </Page>
  </Document>
);

export default  (
  <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
   
    <div> 
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon textAlign="center">
            <Icon name="download" circular />
            <Header.Content>Download</Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  </PDFDownloadLink>
);
