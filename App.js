import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(113, 89, 193);',
    margin: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    color: '#FFF',
  },
});
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Everton</Text>
        <Text style={styles.welcome}>De Grande | Cindy</Text>
      </View>
    </>
  );
}
