    // var signo = prompt('Escribe tu signo')
    // console.log(signo)

var hector = 
{
    nombre: 'Héctor',
    apellido: 'Martínez',
    altura: 1.6,
    libros:12

    
}

var vicky = 
{
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: '1.56',
    libros:15
}

var paula = 
{
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros:20
}
var sacha = 
{
    nombre: 'Sacha',
    apellido: 'Barros',
    altura: 1.81,
    libros:25
}
var juan = 
{
    nombre: 'Juan',
    apellido: 'Barros',
    altura: 1.87,
    libros:31
}

var personas = [hector, vicky, paula, sacha, juan]

const esBaja = (personas) => personas.altura<1.7;
const esAlta= ({altura})=> altura>1.8;

const pasarAlturaACms = persona =>({
        ...persona,
        altura: persona.altura * 100
    })

    const reductor = (acum, {libros})=> acum + libros;

var personasBajas = personas.filter(esBaja)
var personasAltas = personas.filter(esAlta)
var personasCms = personas.map(pasarAlturaACms)
var librosTotal = personas.reduce(reductor,0)

// var acum = 0;
// for (let i = 0; i < personas.length; i++) {
//     acum += personas[i].libros;
//     }



console.log(`Las personas tienen ${librosTotal} libros`)
