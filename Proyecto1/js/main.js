$(document).ready(function(){

    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('#bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
          });
    }
    //Post
    if (window.location.href.indexOf('index') > -1) {
    var posts = [
        {
            tittle: 'Prueba de titulo',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ivoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },  
        {
            tittle: 'Prueba de titulo',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ivoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            tittle: 'Prueba de titulo',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ivoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            tittle: 'Prueba de titulo',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ivoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]
    
    posts.forEach((element) => {
        var post = `
        <article class="post">
                        <h2>${element.tittle}</h2>
                     <span class="date">${element.date}</span>
                        <p>${element.content}</p>
                     <a href="#" class="button-more">Leer más!</a>
                 </article>
        `;

        $('#posts').append(post)
    });
}


    //Selector de tema
    var theme = $('#theme')
    $('#to-green').click(function() {
        theme.attr('href', "css/verde.css")  
    });
    $('#to-red').click(function() {
        theme.attr('href', "css/rojo.css")  
    });
    $('#to-blue').click(function() {
        theme.attr('href', "css/azul.css")  
    });

    //Scroll ariba de la web
    $('.subir').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $('#login form').submit(function() {
        var form_name = $('#form_name').val();
        localStorage.setItem("Form_Name", form_name)
    });

    var formName = localStorage.getItem("Form_Name");

    if (formName != null && formName != "undefined") {
        var about_parrafo = $('#about p');
        about_parrafo.html("Bienvenido, " + formName);
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();
        $('#logout').click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion()
    }

    if (window.location.href.indexOf('reloj') > -1) {
        //Reloj
        setInterval(function() {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }

    if (window.location.href.indexOf('contacto') > -1) {
        // $.validate({
        //     lang: 'es'
        // });
    }
})