function cambiarColor(){
    var pagina = document.documentElement;
    if(pagina.style.colorScheme=='dark'){
        pagina.style.colorScheme = 'light';
        document.body.style.background = 'rgb(240, 240, 228)';

    }else{
        pagina.style.colorScheme = 'dark';
        document.body.style.background = 'none';
    }
    

}