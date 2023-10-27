function trocarTema(){
    let body = document.body;
    let btn = document.getElementById("fundobtn");
    
    if (body.classList.contains('theme-light')){
        btn.style.marginLeft ='0px'
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    } 
    else {
        btn.style.marginLeft ='85px'
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    }  
}

document.getElementById("check").addEventListener("click",()=>{
    let corpo = document.body;
    corpo.classList.toggle("fundobody")
})



