import { useEffect, useRef } from 'react'
import bodyHtml from './body.html?raw'
import initTree from './tree.js'

export default function App() {
  const host = useRef(null)

  useEffect(() => {
    const el = host.current
    el.innerHTML = bodyHtml
    const cleanup = initTree()
    return () => {
      cleanup && cleanup()
      el.innerHTML = ''
    }
  }, [])

  return <div id="app-host" ref={host} style={{ display: 'contents' }} />
}
