console.log(document.title);

document.querySelector('.infocard')

// 1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let generacion1 = document.querySelectorAll('ul li')[1];
generacion1.innerText = 'Generasión 1 Pokimon';

let generacion2 = document.getElementById('gen-1')
generacion2.innerText = 'Generasión 1 Pokimon';

// 2 Cambia el color de fondo de la primera generación de Pokimon.

generacion2.style.backgroundColor = 'orange';

const generacionfondo = document.querySelector(".infocard-list.infocard-list-pkmn-lg");
generacionfondo.style.background = 'orange';

// 3 Imprime por consola la URL de la página.

let URL = document.URL;
console.log(URL)

// 4 Imprime por consola el dominio de la página.

let Dominio = document.domain;
console.log(Dominio);

// 5 Imprime todos los nodos de imagen.

let imagenes = document.getElementsByTagName('img');
console.log(imagenes)

// 6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const imagenesNuevas = document.querySelectorAll('img');

imagenesNuevas.forEach(imagen => imagen.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'));


// 7 Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

document.querySelectorAll('.itype.flying').forEach(flyingType => {
    
    const infocard = flyingType.closest('.infocard');
    
    if (infocard) {
        const textElement = infocard.querySelector('.infocard-lg-data.text-muted');
        if (textElement) {
            textElement.style.backgroundColor = '#ADD8E6';  
        }
    }
});




