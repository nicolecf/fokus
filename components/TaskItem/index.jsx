import { Text, View } from "react-native"
import { IconCheck, IconPencil, IconTrash } from "../Icons"

const TaskItem = ({completed, text}) => {
  return (
    <View>
      <IconCheck checked={completed}/>
      <Text>
        {text}
      </Text>
      <IconPencil />
      <IconTrash />
    </View>
  )
}

export default TaskItem
