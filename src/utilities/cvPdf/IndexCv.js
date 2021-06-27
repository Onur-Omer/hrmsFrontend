import React from "react";

import { PDFDownloadLink } from '@react-pdf/renderer';

import {
  Text,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Header from "./Header";
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


const Resume = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image
            src="https://react-pdf.org/static/images/luke.jpg"
            style={styles.image}
          />
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

export default () => (

<PDFDownloadLink document={<Resume />} fileName="somename.pdf">
      {({ loading}) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
  )
