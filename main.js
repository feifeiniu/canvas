let canvas = document.getElementById('myCanvas');
// let ctx = canvas.getContext('2d');

canvas.onclick = (e)=>{
    let div2 = document.createElement("div")
    div2.style.position="absolute"
    div2.style.left=e.clientX+"px"
    div2.style.top=e.clientY+"px"
    div2.style.background="black"
    div2.style.borderRadius="50%"
    div2.style.width="6px"
    div2.style.height="6px"
    div2.style.marginLeft="-3px"
    div2.style.marginTop="-3px"

    canvas.appendChild(div2)
}