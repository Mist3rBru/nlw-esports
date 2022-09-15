import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import {
  Background,
  Game,
  GameCard,
  CreateAdBanner,
  Input,
  FieldInput
} from './components'
import { GameController } from 'phosphor-react'

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
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content
              className="
                fixed top-1/2 left-1/2 py-8 px-10
                text-white bg-[#2A2634] 
                -translate-x-1/2 -translate-y-1/2 rounded-lg
              "
            >
              <Dialog.Title className="text-3xl">
                Publique um anúncio
              </Dialog.Title>
              <form className="flex flex-col gap-4 mt-8">
                <FieldInput
                  label={{
                    title: 'Qual o game?',
                    htmlFor: 'game'
                  }}
                  input={{
                    type: 'text',
                    placeholder: 'Seleciona o game que deseja jogar'
                  }}
                />
                <FieldInput
                  label={{
                    title: 'Qual seu nome ou nickname?',
                    htmlFor: 'name'
                  }}
                  input={{
                    type: 'text',
                    placeholder: 'Como te chamam dentro do game?'
                  }}
                />
                <div className="flex justify-between gap-4">
                  <FieldInput
                    label={{
                      title: 'Joga há quantos anos?',
                      htmlFor: 'yearsPlaying'
                    }}
                    input={{
                      type: 'text',
                      placeholder: 'Tudo bem ser ZERO'
                    }}
                  />
                  <FieldInput
                    label={{
                      title: 'Qual seu Discord?',
                      htmlFor: 'discord'
                    }}
                    input={{
                      type: 'text',
                      placeholder: 'Usuário#0000'
                    }}
                  />
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays" className="font-semibold">
                      Quando costuma jogar?
                    </label>
                    <div className="flex gap-1">
                      <button
                        title="Domingo"
                        className="p-3 rounded bg-zinc-900"
                      >
                        D
                      </button>
                      <button
                        title="Segunda"
                        className="p-3 rounded bg-zinc-900"
                      >
                        S
                      </button>
                      <button title="Terça" className="p-3 rounded bg-zinc-900">
                        T
                      </button>
                      <button
                        title="Quarta"
                        className="p-3 rounded bg-zinc-900"
                      >
                        Q
                      </button>
                      <button
                        title="Quinta"
                        className="p-3 rounded bg-zinc-900"
                      >
                        Q
                      </button>
                      <button title="Sexta" className="p-3 rounded bg-zinc-900">
                        S
                      </button>
                      <button
                        title="Sábado"
                        className="p-3 rounded bg-zinc-900"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hoursStart" className="font-semibold">
                      Qual horário do dia?
                    </label>
                    <div className="grid grid-cols-2 gap-1">
                      <Input id="hourStart" type="time" />
                      <Input id="hourEnd" type="time" />
                    </div>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Input id="useVoiceChannel" type="checkbox" />
                  <label
                    htmlFor="useVoiceChannel"
                    className="font-semibold"
                  >
                    Costumo me conectar ao chat de voz
                  </label>
                </div>
                <footer className="flex justify-end items-center gap-4 mt-8">
                  <button
                    type="button"
                    className="bg-zinc-500 hover:bg-zinc-600 px-4 h-12 rounded-md font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-violet-500 hover:bg-violet-600 px-4 h-12 rounded-md font-semibold flex items-center gap-4"
                  >
                    <GameController className="w-6 h-6" />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Background>
  )
}

