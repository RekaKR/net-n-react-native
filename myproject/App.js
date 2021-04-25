import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/Header/Header'

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy a coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>

        <View style={styles.list}>
          <FlatList data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>} />
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
