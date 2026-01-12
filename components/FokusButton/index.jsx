import { Pressable, StyleSheet, Text } from "react-native"

export const FokusButtons = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    padding: 8,
    borderRadius: 32
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  },
})