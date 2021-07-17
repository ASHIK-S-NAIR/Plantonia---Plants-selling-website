// sticky header
window.addEventListener("scroll", ()=>{
    if(this.pageYOffset > 30){
        document.querySelector('.header').classList.add('open');
    }else{
        document.querySelector('.header').classList.remove('open');
    }
})