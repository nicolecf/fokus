import { Link } from "expo-router"
import { StyleSheet, Text } from "react-native"

export const LinkButton = ({pathname, title, icon}) => {
  return (
    <Link style={styles.button} href={{ pathname }}>
      {icon}<Text style={styles.buttonText}>{title}</Text>
    </Link>
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
    gap: 12,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold'
  },
})
