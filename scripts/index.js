
var sacha =
{
    nombre: 'Sacha',
    apellido: 'Liof',
    edad:29
}
var dario =
{
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad:27
}

function imprimirMayusculas(persona) {
    // var nombre = persona.nombre
    var {nombre} = persona;
    console.log(nombre.toUpperCase())
}

imprimirMayusculas(sacha);
imprimirMayusculas(dario);

console.log('hola');