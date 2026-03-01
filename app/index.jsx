import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButtons } from "../components/FokusButton";
import { Footer } from "../components/Footer";

export default function Index () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}/>
      <View style={{maxWidth: '60%'}}>
        <Text style={styles.textIndex}>Otimize sua Produtividade</Text>
        <Text style={{...styles.textIndex, ...styles.textIndexBold}}>mergulhe no que importa</Text>
      </View>
      <Image source={require('../assets/images/index-image.png')} style={styles.image}/>
      <FokusButtons  title={'Quero Iniciar!'} onPress={() => router.replace('/pomodoro')}/>
      <Footer />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  image: {
    width: 350,
    height: 350,
    maxHeight: '50%'
  },
  textIndex: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 100,
  },
  textIndexBold: {
    fontWeight: 'bold'
  }
})
