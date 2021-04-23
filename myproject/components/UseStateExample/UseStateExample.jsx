import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const App = () => {
  const [name, setName] = useState('Réka')
  const [person, setPerson] = useState({ call: { first: 'She', second: 'her' }, sex: 'woman', age: 26 })

  const clickHandler = () => {
    setName('Béla')
    setPerson({ call: { first: 'He', second: 'his' }, sex: 'man', age: 'not known' })
  }

  return (
    <View style={styles.container}>
      <Text>It's {name}.</Text>
      <Text>{person.call.first} is a {person.sex} and {person.call.second} age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='click me' onPress={clickHandler} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})
