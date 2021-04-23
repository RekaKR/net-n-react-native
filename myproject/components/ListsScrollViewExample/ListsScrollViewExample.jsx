import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const ListsScrollViewExample = () => {
  const [cats, setCats] = useState([
    { name: 'kis cica', key: '1' },
    { name: 'nagy cica', key: '2' },
    { name: 'macskusz', key: '3' },
    { name: 'cicus', key: '4' },
    { name: 'cirmi', key: '5' },
    { name: 'cirmos', key: '6' },
    { name: 'kis macska', key: '7' },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {cats.map(cat => <View key={cat.key}><Text style={styles.cat}>{cat.name}</Text></View>)}
      </ScrollView>
    </View>
  )
}

export default ListsScrollViewExample

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  cat: {
    backgroundColor: 'pink',
    marginTop: 24,
    padding: 30,
    fontSize: 24
  }
})