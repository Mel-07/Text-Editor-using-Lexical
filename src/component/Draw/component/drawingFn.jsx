
export const drawTriangle = () =>{
    ctx.beginPath()
    ctx.moveTo(clientPost.x,clientPost.y)
    ctx.lineTo (600,y)
    ctx.lineTo (450,5)
    ctx.lineTo (x,y)
    ctx.fillStyle = "rgb(255 165 0)";
    ctx.fill()
    ctx.stroke()
}