import { useState } from "react"

export function useToast() {
  const [toasts] = useState([])
  return { toasts }
} 