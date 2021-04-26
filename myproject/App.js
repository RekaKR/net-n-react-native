import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import Header from './components/Header/Header'
import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy a coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const pressHandler = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key))
  }

  const submitHandler = text => {
    setTodos(prevTodos => [{ text, key: uuid.v4() }, ...prevTodos])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
        </View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
})
