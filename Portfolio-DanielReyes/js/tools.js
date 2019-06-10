window.onload = function () {
    var modal = document.getElementById('simpleModal'); //modal element
    var modalBtn = document.getElementsByClassName('modalBtn'); // open modal button
    var closeBtn = document.getElementById('closeBtn'); // close modal button
    const titles = ["PIRATETEAPARTY", "SPAM", "REDDITLIST", "EDUSHARE", "APP C# TRANSPORTE", "GAMELIST"];
    const content = ["En el proyecto de pirateTeaParty trabaje junto con otros compañeros en realizar una web para dar a conocer mejor la historia de los piratas en el mediterraneo. Utilizamos php por primera vez, haciendo uso de cosas como cookies, funciones php, formularios, etc.",
    "Este proyecto en grupo ha sido muy especial ya que fue echo para ayudar a la protectora de animales de Mataró, consiste en una aplicación web que realiza las donaciones y ayuda a su contabilidad, recuento, proporciona estadísticas útiles. Aqui hicimos uso de Laravel usando rutas, apis, archivos, etc. Lo cual me permitió entender como funciona un framework de php en profundidad.",
    "RedditList consiste en una aplicación ionic que mediante una api de reddit (un foro), obtiene los posts según categoria. Ionic resultó un poco más complicado de lo que me parecía al principio, pero despúes de dedicarle tiempo te das cuenta que facilita bastante para la creación de apps en IOS/ANDROID.",
    "Edushare fue el proyecto que realize junto con compañeros de clase, consiste en una aplicación android para mejorar la clase, permite que un profesor cree sus clases, añada a los alumnos, interactue con ellos ya sea añadiendo archivos o fotos, etc.",
    "Esta app la hize para una pequeña empresa de transporte, que quería que gestionase tanto sus conductores, como el material que debían llevar. Todo esto lo cree usando Linq en c#, por lo que mediante el uso de los DataSets no resultó excesivamente complicado.",
    "GameList fue un pequeño proyecto que realize con un compañero de clase que consistia en una aplicación android que crea listas de tus juegos favoritos, permitiendote ver comentarios de reseñas y la puntuación de estos. Ya que estos se conectaban a una API."];
    for (var i = 0; i < modalBtn.length; i++) {
        //event click open
        modalBtn[i].addEventListener('click', openModal);
    }
    //event click close
    closeBtn.addEventListener('click', closeModal);
    //Listen to outside modal click
    window.addEventListener('click', outsideClick);
    // function to open Modal
    function openModal(event) {
        modal.style.display = 'block';
        var btnid = event.target.id;
        document.getElementsByClassName('modal-title')[0].innerHTML = titles[btnid];
        document.getElementsByClassName('modal-words')[0].innerHTML = content[btnid];
    }
    // function to close Modal
    function closeModal() {
        modal.style.display = 'none';
    }
    // function to close Modal with outside click
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
}