import { Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";

export default function Tasks () {
  return (<View>
    <Text>
      <TaskItem />
      Pagina para listar tarefas
    </Text>
  </View>

  )
}
