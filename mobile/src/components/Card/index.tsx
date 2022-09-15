import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  Text
} from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

export interface Game {
  id: string
  ads: number
  title: string
  bannerUrl: string
  createdAt: string
}

export function Card(props: Game & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground
        style={styles.cover}
        source={{
          uri: props.bannerUrl
        }}
      >
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{props.title}</Text>
          <Text style={styles.ads}>{props.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
