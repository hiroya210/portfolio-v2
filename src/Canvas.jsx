import React,{useEffect, useRef} from 'react'

const Canvas = ({draw}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;
        //draw
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
          }
          render()
          
          return () => {
            window.cancelAnimationFrame(animationFrameId)
          }
    }, [draw])

    return <canvas ref={canvasRef}/>
}

export default Canvas