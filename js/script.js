//declara variable de nav
var nav = document.querySelector('nav');


//hace que en color de nav cambien al estar en una  posicion y mayor a 551
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            nav.classList.add('bg-color', 'shadow',  );
        }else{
            nav.classList.remove('bg-color', 'shadow', );
        }
        });



//declara la variable a que hace referencia a la etiqueta a del nav
var a = document.querySelector('a');

//aqui sehace que se agrege la clase texto-negro a la a del nav siempre que este en una posicion inferior a 550
    window.addEventListener('scroll', function () {
        if (window.pageYOffset < 550) {
            a.classList.add('texto-negro');
        }else{
            a.classList.remove('texto-negro');
        }
        });

//declara la variable a que hace referencia a la etiqueta a del nav
var la = document.querySelector('a');

//aqui sehace que se agrege la clase texto-blanco a la a del nav siempre que este en una posicion mayor a 550
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            la.classList.add('texto-blanco' , );
        }else{
            la.classList.remove('texto-blanco' , );
        }
        });

