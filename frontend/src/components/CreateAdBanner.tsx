import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
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
      <Dialog.Trigger className="flex items-center gap-3 py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 transition rounded">
        <MagnifyingGlassPlus size={24} />
        <span>Publicar Anúncio</span>
      </Dialog.Trigger>
    </div>
  )
}
