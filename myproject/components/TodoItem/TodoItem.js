import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
      <Icon name="remove" size={20} color="firebrick" />
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    padding: 16,
    borderEndColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})
