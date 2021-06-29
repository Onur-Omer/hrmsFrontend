import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
  },
  link: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

let userData=JSON.parse(localStorage.getItem("user"))

export default  (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{userData.firstName } {userData.lastName}</Text>
      <Text style={styles.subtitle}>{userData.birthday}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link  style={styles.link}>
        {userData.email}
      </Link>
    </View>
  </View>
);
