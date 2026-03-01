import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#021123'
          },
          // headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
          },
          drawerStyle: {
            backgroundColor: '#021123'
          },
          drawerLabelStyle: {
            color: '#FFF'
          }
        }}>
          <Drawer.Screen
            name='add-task/index'
            options={{
              // headerShown: false,
              drawerLabel: 'Add Tasks',
              title: 'Task',
            }}
          />
      </Drawer>
    </GestureHandlerRootView>
  )
}
