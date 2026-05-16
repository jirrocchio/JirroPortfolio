import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }

    const grow = () => {
      dot.style.width = '12px'
      dot.style.height = '12px'
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.opacity = '0.9'
    }
    const shrink = () => {
      dot.style.width = '8px'
      dot.style.height = '8px'
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.opacity = '0.6'
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[role=button]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  )
}
