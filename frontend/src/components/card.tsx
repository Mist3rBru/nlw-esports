interface CardProps {
  imageUrl: string
  url: string
  title: string
  announcements: number
}

export function Card(props: CardProps) {
  return (
    <div>
      <a className="relative rounded-md overflow-hidden" href={props.url}>
        <img src={props.imageUrl} alt={`banner ${props.title}`} />
        <div
          className="
            absolute bottom-0 left-0
            flex flex-col gap-1
            w-full pt-16 pb-4 px-4 
            bg-game-gradient
          "
        >
          <strong className="text-white font-bold">{props.title}</strong>
          <span className="text-zinc-400">{props.announcements} anúncios</span>
        </div>
      </a>
    </div>
  )
}
