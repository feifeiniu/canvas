let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width=document.documentElement.clientWidth;
canvas.height=document.documentElement.clientHeight;
function drawLine(x1,x2,x3,x4) {
    ctx.beginPath();
    ctx.moveTo(x1,x2);
    ctx.lineTo(x3,x4);
    ctx.stroke();
    ctx.lineCap = "round";
    ctx.lineWidth=4;
}
let last;
let painting = false;
ctx.fillStyle = "black";
let isTouchDevice = "ontouchstart" in  document.documentElement;
if (isTouchDevice){
    canvas.ontouchstart=(e)=>{
        last = [e.touches[0].clientX,e.touches[0].clientY];
    }
    canvas.ontouchmove=(e)=>{
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawLine(last[0],last[1],x,y);
        last =[x,y];
    }
}else{
    canvas.onmousedown = (e)=>{
        painting = true;
        last=[e.clientX,e.clientY]
    }
    canvas.onmousemove=(e)=>{
        if (painting===true){
            ctx.beginPath();
            drawLine(last[0],last[1],e.clientX,e.clientY);
            last =[e.clientX,e.clientY];
        }else{
            console.log("什么也没做")
        }
    }
    canvas.onmouseup = ()=>{
        painting=false
    }
}




