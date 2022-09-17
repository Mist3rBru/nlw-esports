import { FormEvent, useCallback, useState } from 'react'
import { CaretDown, Check, GameController } from 'phosphor-react'
import { FieldInput } from './FieldInput'
import { Input } from './Input'
import { Game } from './GameCard'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'

interface CreateAdModalProps {
  games: Game[]
}

export function CreateAdModal(props: CreateAdModalProps): JSX.Element {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  const week: Record<number, string> = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado'
  }

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    const body = {
      ...data,
      weekDays: weekDays.join(' '),
      useVoiceChannel,
      yearsPlaying: Number(data.yearsPlaying)
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_API_HOST}/ad/${data.gameId}`,
        body
      )
      alert('Anúncio criado com sucesso')
    } catch (error) {
      alert('Erro ao criar anúncio')
      console.error(error)
    }
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content
        className="
        fixed top-1/2 left-1/2 py-8 px-10
        text-white bg-[#2A2634] 
        -translate-x-1/2 -translate-y-1/2 rounded-lg
      "
      >
        <Dialog.Title className="text-3xl">Publique um anúncio</Dialog.Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Qual o game?</label>
            <Select.Root name="gameId">
              <Select.Trigger className="flex justify-between items-center bg-zinc-900  placeholder:text-zinc-500 py-3 px-4 rounded text-sm focus:outline-none">
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="flex flex-col gap-1 p-1.5 bg-zinc-800 text-white rounded overflow-hidden">
                  <Select.Viewport>
                    {props.games.map(game => (
                      <Select.Item
                        key={game.id}
                        value={game.id}
                        className="flex justify-between items-center gap-2 hover:bg-zinc-700 py-3 px-2 cursor-pointer rounded outline-none"
                      >
                        <Select.ItemText>{game.title}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="text-lg text-violet-500" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <FieldInput
            label={{
              title: 'Qual seu nome ou nickname?',
              htmlFor: 'name'
            }}
            input={{
              name: 'name',
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
                name: 'yearsPlaying',
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
                name: 'discord',
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
              <ToggleGroup.Root
                type="multiple"
                className="flex gap-1"
                onValueChange={setWeekDays}
                value={weekDays}
              >
                {Object.entries(week).map(([n, day]) => (
                  <ToggleGroup.Item
                    key={n}
                    value={n}
                    title={day}
                    className={`p-3 rounded ${
                      weekDays.includes(n) ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    {day.substring(0, 1)}
                  </ToggleGroup.Item>
                ))}
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hoursStart" className="font-semibold">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-1">
                <Input name="hourStart" id="hourStart" type="time" />
                <Input name="hourEnd" id="hourEnd" type="time" />
              </div>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              onCheckedChange={checked => {
                checked === true
                  ? setUseVoiceChannel(true)
                  : setUseVoiceChannel(false)
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className="flex justify-end items-center gap-4 mt-8">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 hover:bg-zinc-600 px-4 h-12 rounded-md font-semibold"
            >
              Cancelar
            </Dialog.Close>
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
  )
}
