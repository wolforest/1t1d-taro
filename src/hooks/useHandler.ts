import { useCallback, useRef } from 'react'

type Fn = (...args: any[]) => any

export function useHandler<T extends Fn>(fn: T): T {
  const ref = useRef<T>()
  ref.current = fn
  const handler = useCallback((...args: Parameters<T>) => {
    return ref.current!(...args)
  }, [])
  return handler as T
}
