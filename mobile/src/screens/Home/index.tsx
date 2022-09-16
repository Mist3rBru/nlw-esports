import React, { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation } from '@react-navigation/native'

import { Card, Game, Heading } from '../../components'

import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles'

export function HomeScreen() {
  const [games, setGames] = useState<Game[]>([])
  const { navigate } = useNavigation()
  
  const handleOpenGame = (game: Game) => {
    navigate('game', game)
  }

  useEffect(() => {
    fetch('http://localhost:3030/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Seleciona o game que deseja jogar..."
      />
      <FlatList
        data={games}
        keyExtractor={game => game.id}
        renderItem={({ item }) => <Card {...item} onPress={() => handleOpenGame(item)}/>}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
  )
}
