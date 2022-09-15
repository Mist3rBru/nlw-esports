export interface Game {
  id: string
  ads: number
  title: string
  bannerUrl: string
  createdAt: string
}

export function GameCard(props: Game) {
  return (
    <div>
      <a className="relative rounded-md overflow-hidden" href="">
        <img src={props.bannerUrl} alt={`banner ${props.title}`} />
        <div
          className="
            absolute bottom-0 left-0
            flex flex-col gap-1
            w-full pt-16 pb-4 px-4 
            bg-game-gradient
          "
        >
          <strong className="text-white font-bold">{props.title}</strong>
          <span className="text-zinc-400">{props.ads} anúncios</span>
        </div>
      </a>
    </div>
  )
}
