import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

const FlatListExample = () => {
  const [cats, setCats] = useState([
    { name: 'kis cica', id: '1' },
    { name: 'nagy cica', id: '2' },
    { name: 'macskusz', id: '3' },
    { name: 'cicus', id: '4' },
    { name: 'cirmi', id: '5' },
    { name: 'cirmos', id: '6' },
    { name: 'kis macska', id: '7' },
  ])

  const pressHandler = (id) => {
    setCats(prevCats => {
      return prevCats.filter(cat => cat.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList data={cats} keyExtractor={(item) => item.id} numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
            <Text style={styles.cat}>{item.name}</Text>
          </TouchableOpacity>
        } />
      {/*FlatList takes the keys automatically is the object has one. */}
    </View>
  )
}

export default FlatListExample

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  item: {
    width: '40%',
    backgroundColor: 'pink',
    marginTop: 24,
    marginHorizontal: '5%',
    padding: 30,
    textAlign: 'center',
    flex: 1
  },
  cat: {
    fontSize: 24,
  }
})
