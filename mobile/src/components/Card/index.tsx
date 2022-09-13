import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableOpacityProps,
  Text
} from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

export interface CardProps {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

export function Card(props: CardProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={props.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.ads}>{props.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
