
window.onload=function(){

    AOS.init({easing: 'ease',
            duration: 1800,
            once:true
            });
    document.getElementById('menu-toggler').addEventListener('click', displayMenu);
    document.getElementById('nav-link').addEventListener('click', close);
    document.getElementById('nav-link1').addEventListener('click', close);
    document.getElementById('nav-link2').addEventListener('click', close);
    document.getElementById('nav-link3').addEventListener('click', close);

    function displayMenu(){
        document.getElementById('menu-toggler').classList.toggle('open');
        document.getElementById('top-nav').classList.toggle('open');

    }
    function close(){
        document.getElementById('menu-toggler').classList.remove('open');
        document.getElementById('top-nav').classList.remove('open');
    }

}
