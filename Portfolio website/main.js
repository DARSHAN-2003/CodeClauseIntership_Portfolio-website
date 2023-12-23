let btn9=document.getElementsByClassName("btn4")[0]
let img=document.getElementsByClassName("scroll")[0]
btn9.addEventListener('click',()=>{
    if (img.style.overflowY==="hidden") {
        img.style.overflowY="scroll"
        // btn9.style.display="none"
        btn9.innerHTML="See Less"
    }
    else{
        img.style.overflowY="hidden"
        // img.style.maxHeight="705px"
        btn9.innerHTML="See More"    
    }
})