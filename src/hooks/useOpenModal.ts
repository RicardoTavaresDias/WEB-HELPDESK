import { useState, useRef, useEffect } from "react"

export function useOpenModal(){
  const [open, setOpen] =useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Fecha o menu se clicar fora
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return {
    open,
    setOpen,
    menuRef
  }
}