
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

function cumpleaños (persona)
{
    return {
        ...persona,
        edad: persona.edad +1
    }
}

cumpleaños(dario);