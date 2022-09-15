/* eslint-disable camelcase */
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import React from 'react'
import { StatusBar } from 'react-native'
import { Background } from './src/components'
import { Routes } from './src/routes'
import { LoadingScreen } from './src/screens'

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {fontLoaded ? <Routes /> : <LoadingScreen />}
    </Background>
  )
}

