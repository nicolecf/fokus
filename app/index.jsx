import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButtons } from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./focus.png'),
    display: 'Foco',
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png'),
    display: 'Pausa Curta',
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png'),
    display: 'Pausa Longa',
  }
];

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[2]);

  const [timeRunning, setTimeRunning] = useState(false)

  const [seconds, setSeconds] = useState(pomodoro[2].initialValue)
  const timeRef = useRef(null)

  const clear = () => {
    if (timeRef.current != null) {
      setTimeRunning(false)
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }
  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if (timeRef.current) {
      clear()
      return
    }
    setTimeRunning(true)
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timeRef.current = id
  }
  return (
    <View
      style = {styles.container}
    >
      <Image source={timerType.image} style={styles.image}/>
      <View style = {styles.actions}>
        <View style = {styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
              />
          ))}
        </View>
        <Timer totalSeconds={seconds}/>
        <FokusButtons onPress={toggleTimer}
          title={timeRunning ? 'Pausar' : 'Começar'}
          icon={timeRunning ? <IconPause/> : <IconPlay/>}
        />
      </View>
      <View style = {styles.footer}>
        <Text style = {styles.footerText}>Projeto Criado sem fins de comerciais</Text>
        <Text style = {styles.footerText}>Desenvolvido por Alura</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  image: {
    width: 350,
    height: 350,
    maxHeight: '50%'
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timer: {
    fontSize: 54,
    fontWeight: 800,
    color: '#FFF',
    textAlign: 'center'
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.4
  }
})
