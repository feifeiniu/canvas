let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width=document.documentElement.clientWidth;
canvas.height=document.documentElement.clientHeight;

let painting = false
canvas.onmousedown = ()=>{
    painting = true
}
canvas.onmousemove=(e)=>{
    if (painting===true){
    ctx.beginPath();
    ctx.arc(e.clientX,e.clientY,5,0,360);
    ctx.fill();
    }

    ctx.fillStyle = "black"
}
canvas.onmouseup = ()=>{
    painting=false
}




// canvas.onmousemove = (e)=>{
//     let div2 = document.createElement("div")
//     div2.style.position="absolute"
//     div2.style.left=e.clientX+"px"
//     div2.style.top=e.clientY+"px"
//     div2.style.background="black"
//     div2.style.borderRadius="50%"
//     div2.style.width="6px"
//     div2.style.height="6px"
//     div2.style.marginLeft="-3px"
//     div2.style.marginTop="-3px"
//
//     canvas.appendChild(div2)
// }
