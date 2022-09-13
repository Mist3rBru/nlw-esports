import React from 'react'
import { View, Image, FlatList } from 'react-native'

import { Card, Heading } from '../../components'

import logoImg from '../../assets/logo-nlw-esports.png'
import { GAMES } from '../../utils/games'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Seleciona o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={game => game.id}
        renderItem={({ item }) => <Card {...item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
