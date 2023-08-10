import { useEffect, useRef } from "react"

export function Bg({ width=300, height=300, fadeColor='#ffffff30', strokeColor="#333", strokeWidth }: {
  width?: number
  height?: number
  fadeColor?: string
  strokeColor?: string
  strokeWidth?:number
}) {
  const canvasRef = useRef<any>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const canvwidth = useRef<number>(width)
  const canvheight = useRef<number>(height)


  useEffect(() => {
    ctx.current = canvasRef.current.getContext('2d')

    // #region config 🛠️
    if (ctx.current) {
      const c = ctx.current
      c.fillStyle = fadeColor
      c.strokeStyle = strokeColor
      c.lineWidth = 1 || strokeWidth
      c.lineCap = 'round'
    }
    // #endregion

    // #region event setup 
    document.addEventListener('mousemove', draw)
    // #endregion

    // #region fading interval ⏱️
    const fading = setInterval(() => {
      ctx.current?.fillRect(0, 0, 300, 300)
      ctx.current?.beginPath()
      ctx.current?.closePath()
    }, 200);
    // #endregion

    // #region update background interval 🖼️
    function setBodyBg() {
      const imgUrl = canvasRef.current.toDataURL()
      document.body.style.backgroundImage = `url('${imgUrl}')`
    }
    const setBg = setInterval(() => { setBodyBg() },20);
    // #endregion

    // #region clean up 🧼
    return () => {
      document.removeEventListener('mousemove', draw)
      clearInterval(fading)
      clearInterval(setBg)
    }
    // #endregion

  }, [])

  function getCords(clientx: number, clientY: number) {

    const getPercentage = (number: number, percentOf: number) => Number(
      (number / percentOf)
        .toFixed(2)
        .split('.')[1]
    )

    const mousex = getPercentage(clientx, window.innerWidth)
    const mousey = getPercentage(clientY, window.innerHeight)

    return {
      x: canvwidth.current / 100 * mousex,
      y: canvheight.current / 100 * mousey
    }

  }

  function draw(e: MouseEvent) {
    const { x, y } = getCords(e.clientX, e.clientY)
    const c = ctx.current
    c?.lineTo(x, y)
    c?.stroke()
  }

  return <canvas ref={canvasRef}
    width={canvwidth.current}
    height={canvheight.current}
    style={{ opacity: '0%', position:'absolute' }}
  />

}