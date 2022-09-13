interface BackgroundProps {
  children: any
}

export function Background({ children }: BackgroundProps) {
  return (
    <div
      className="
        min-h-screen min-w-screen
        bg-galaxy bg-cover bg-no-repeat
    "
    >
      {children}
    </div>
  )
}
