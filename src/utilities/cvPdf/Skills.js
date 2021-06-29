/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';


const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontSize: 10,
    marginBottom: 10,
  },
});

let LangData=JSON.parse(localStorage.getItem("cvs"))
let clickedCv=JSON.parse(localStorage.getItem("clickedCv"))

const SkillEntryForeignLangs = ({ language,level}) => (
  <View>
    <Text style={styles.title}>{language}</Text>
    <Text style={styles.skills}>Level={level}</Text>
  </View>
);

const SkillEntryProgramingLangs = ({ usedLanguages}) => (
  <View>
    <Text style={styles.title}>{usedLanguages}</Text>
  </View>
);

const Skills = () => (
  <View>
    <Title>Foreign Languages</Title>
    {LangData[clickedCv].foreignLanguages.map(({ cvForeignLanguageId,language,level }) => (
      <SkillEntryForeignLangs
        language={language}
        level={level}
        key={cvForeignLanguageId}
      />
    ))}

    <Title>Programing Languages</Title>
    {LangData[clickedCv].langs.map(({ cvSoftwareLangId,usedLanguages }) => (
      <SkillEntryProgramingLangs
        usedLanguages={usedLanguages}
        key={cvSoftwareLangId}
      />
    ))}
  </View>
);

export default Skills;
