import { useState } from 'react'
import { useHandler } from './useHandler'

type Fn = (...args: any[]) => any

export function useQuery<T extends Fn>(loader: T) {
  type Data = Awaited<ReturnType<T>>
  const [data, setData] = useState<Data>()
  const [loading, setLoading] = useState(false)
  const load = useHandler(async (...args: Parameters<T>) => {
    try {
      setLoading(true)
      const ret = await loader(...args)
      setData(ret)
    } finally {
      setLoading(false)
    }
  })
  return { data, loading, load }
}
