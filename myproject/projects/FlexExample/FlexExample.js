import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexExample = () => {
  return (
    <View style={styles.containerSandbox}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

export default FlexExample;

const styles = StyleSheet.create({
  containerSandbox: {
    backgroundColor: '#ddd',
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
    flex: 1
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 20,
    flex: 2
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 30,
    flex: 3
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 40,
    flex: 4
  }
})
