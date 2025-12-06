import * as React from "react"

const PortalContext = React.createContext<HTMLElement | null>(null)

export const PortalProvider = ({
  container,
  children,
}: {
  container: HTMLElement
  children: React.ReactNode
}) => {
  return (
    <PortalContext.Provider value={container}>
      {children}
    </PortalContext.Provider>
  )
}

export const usePortalContainer = () => {
  return React.useContext(PortalContext)
}
