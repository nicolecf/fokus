import { Pressable, StyleSheet, Text } from "react-native"

export const FokusButtons = ({onPress, title, icon}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}<Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    padding: 8,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  },
})
