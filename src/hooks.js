import { useRef, useEffect } from "react"
export const  useDidUpdate = (callback, deps) => {
    const hasMount = useRef(false)
  
    useEffect(() => {
      if (hasMount.current) {
        callback()
      } else {
        hasMount.current = true
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }