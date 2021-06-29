/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
  },
});

const ExperienceEntry = ({ workplaceName, startDate, finishDate, position }) => {
  const title = `${workplaceName} | ${position}`;
  const date = `${startDate} | ${finishDate}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      {/* <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List> */}
    </View>
  );
};


let experienceData=JSON.parse(localStorage.getItem("cvs"))
let clickedCv=JSON.parse(localStorage.getItem("clickedCv"))

const Experience = () => (

  
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData[clickedCv].experiances.map(({ cvExperianceId,workplaceName, startDate, finishDate, position }) => (
      <ExperienceEntry
        workplaceName={workplaceName}
        startDate={startDate}
        finishDate={finishDate}
        key={cvExperianceId}
        position={position}
      />
    ))}
  </View>
  )

export default Experience;
