import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
  },
  degree: {
    fontSize: 10,
  },
  candidate: {
    fontSize: 10,
  },
});

const SchoolEntry = ({ name, startDateSchool, finishDateSchool, department }) => {
  
  const date = `${startDateSchool} | ${finishDateSchool}`;
  return (
    <div>
    <Text style={styles.school}>{name}</Text>
    <Text style={styles.degree}>{department}</Text>
    <Text style={styles.candidate}>{date}</Text>
    </div>
  );
};

let schoolData=JSON.parse(localStorage.getItem("cvs"))
let clickedCv=JSON.parse(localStorage.getItem("clickedCv"))

export default (
  <View style={styles.container}>
    <Title>Education</Title>
    
    {schoolData[clickedCv].schools.map(({ cvSchoolId,name, startDateSchool, finishDateSchool, department }) => (
      
      <SchoolEntry
        name={name}
        startDateSchool={startDateSchool}
        finishDateSchool={finishDateSchool}
        key={cvSchoolId}
        department={department}
      />
    ))}
  </View>
);
