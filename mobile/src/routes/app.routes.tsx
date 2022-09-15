import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, GameScreen } from '../screens'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="game" component={GameScreen} />
    </Navigator>
  )
}
