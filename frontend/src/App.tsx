import { MagnifyingGlassPlus } from 'phosphor-react'
import { Background, Card } from './components'

export default function App() {
  return (
    <Background>
      <div className="w-11/12 max-w-[1344px] mx-auto py-20 flex flex-col items-center">
        <img
          src="/logo-nlw-esports@2x.png"
          alt="logo-nlw-esports"
          className="w-80"
        />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu{' '}
          <span className="bg-nlw-gradient text-transparent bg-clip-text">
            duo
          </span>{' '}
          está aqui
        </h1>
        <ul className="grid grid-cols-6 gap-6 mt-16">
          <Card
            announcements={4}
            title="League of Legends"
            imageUrl="/games/game-1.png"
            url=""
          />
          <Card
            announcements={4}
            title="Dota 2"
            imageUrl="/games/game-2.png"
            url=""
          />
          <Card
            announcements={4}
            title="Counter Strike"
            imageUrl="/games/game-3.png"
            url=""
          />
          <Card
            announcements={4}
            title="Apex Legends"
            imageUrl="/games/game-4.png"
            url=""
          />
          <Card
            announcements={4}
            title="Fortnite"
            imageUrl="/games/game-5.png"
            url=""
          />
          <Card
            announcements={4}
            title="World of Warcraft"
            imageUrl="/games/game-6.png"
            url=""
          />
        </ul>
        <div
          className="
            relative flex flex-row justify-between items-center
            mt-8 px-8 py-6 bg-[#2A2634]
            self-stretch rounded-lg overflow-hidden
            before:absolute before:top-0 before:left-0
            before:h-1 before:w-full before:bg-nlw-gradient
          "
        >
          <div className="flex flex-col">
            <strong className="text-white text-2xl font-black">
              Não encontrou o seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="flex items-center gap-3 py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 transition rounded">
            <MagnifyingGlassPlus size={24} />
            <span>Publicar Anúncio</span>
          </button>
        </div>
      </div>
    </Background>
  )
}

