import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput style={styles.input} placeholder='new todo..' onChangeText={val => setText(val)} />
      <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
})
