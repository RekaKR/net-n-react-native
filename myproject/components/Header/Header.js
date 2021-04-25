import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    paddingTop: 38
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
