    // var signo = prompt('Escribe tu signo')
    // console.log(signo)

var hector = 
{
    nombre: 'Héctor',
    apellido: 'Martínez',
    altura: 1.6
}

var vicky = 
{
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: '1.56'
}

var paula = 
{
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
var sacha = 
{
    nombre: 'Sacha',
    apellido: 'Barros',
    altura: 1.81
}
var juan = 
{
    nombre: 'Juan',
    apellido: 'Barros',
    altura: 1.87
}

var personas = [hector, vicky, paula, sacha, juan]

const esBaja = (personas) => personas.altura<1.7;

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)
