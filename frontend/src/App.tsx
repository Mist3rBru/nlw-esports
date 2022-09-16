import { useEffect, useState } from 'react'
import { Background, Game, GameCard, CreateAdBanner, CreateAdModal } from './components'
import * as Dialog from '@radix-ui/react-dialog'

export default function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_HOST + '/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <div className="w-11/12 max-w-[1344px] mx-auto py-20 flex flex-col items-center">
        <img src="/logo-nlw-esports@2x.png" alt="logo-nlw-esports" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu{' '}
          <span className="bg-nlw-gradient text-transparent bg-clip-text">
            duo
          </span>{' '}
          está aqui
        </h1>
        <ul className="grid grid-flow-row grid-cols-6 grid-rows-1 gap-6 mt-16">
          {games.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </ul>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal games={games} />
        </Dialog.Root>
      </div>
    </Background>
  )
}

