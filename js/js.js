function trocarTema(){
    let body = document.body;
    
    if (body.classList.contains('theme-light')){
        
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    } 
    else {
        
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    }
    
}

function leftClick() {
    let btn = document.btn;
    btn.style.left ='110px'
}
 function rightClick() {
    let btn = document.btn;
    btn.style.left = '0'
}  

