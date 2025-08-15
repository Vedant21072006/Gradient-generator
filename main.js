// reference-
let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let colorcode=document.querySelector(".backColor")
let body=document.querySelector(".myBody")
let backColor=document.querySelector(".backColor")

// random color:::::
let hexavalues="123456789abcdef";
let color="#";
let leftcolor="#ffffff";
let rightcolor="#ffffff";
const genrateColor=()=>{

for(let i=0;i<6;i++){
    color=color+hexavalues[(Math.random()*14).toFixed(0)];
   
}
let result=color;
color="#"
return result;
}

const applyColor=()=>{
body.style.backgroundImage=`linear-gradient(to right,${leftcolor},${rightcolor})`
backColor.textContent=`background-image:linear-gradient(to right,${leftcolor},${rightcolor};)`

btn1.style.backgroundColor=rightcolor
btn1.textContent=leftcolor
btn2.style.backgroundColor=leftcolor
btn2.textContent=rightcolor
}




btn1.addEventListener('click',()=>{
    leftcolor=genrateColor();
     applyColor();

})
btn2.addEventListener('click',()=>{
    rightcolor=genrateColor();
    applyColor();
})


// to copy
backColor.addEventListener('click',()=>{
    let  text=backColor.innerHTML
    console.log(text)
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard")
})
        
