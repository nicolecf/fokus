import { StyleSheet, Text, View } from "react-native"

export const Footer = () => {
  return (
    <View style = {styles.footer}>
      <Text style = {styles.footerText}>Projeto Criado sem fins de comerciais</Text>
      <Text style = {styles.footerText}>Desenvolvido por Alura</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.4
  }
})
