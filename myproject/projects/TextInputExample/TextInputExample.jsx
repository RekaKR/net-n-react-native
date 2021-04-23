import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputExample = () => {
  const [name, setName] = useState('Réka')
  const [age, setAge] = useState(26)

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput style={styles.input} placeholder='e.g. John Doe' multiline onChangeText={(val) => setName(val)} />

      <Text>Enter age:</Text>
      <TextInput style={styles.input} placeholder='e.g. 99' keyboardType='numeric' onChangeText={(val) => setAge(val)} />

      <Text>name: {name}, age: {age}</Text>
    </View>
  )
}

export default TextInputExample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#777',
  }
})
