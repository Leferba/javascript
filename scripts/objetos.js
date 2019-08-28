// function heredaDe (prototipoHijo, prototipoPadre){
//     var fn =function(){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype= new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }



class Persona {
    constructor (nombre, apellido, edad, altura) {
        this.nombre= nombre
        this.apellido= apellido
        this.edad= edad
        this.altura=altura
    }
    saludar (fn){
        var {nombre,apellido}= this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
        fn (nombre, apellido, false)
    }
    
    }
    soyAlto(){
        return this.altura>1.7
    }    
}

// Persona.prototype.saludar = function (){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto =function(){
//         return this.altura>1.7
// }

// function Desarrollador (nombre, apellido){
//     this.nombre=nombre
//     this.apellido=apellido
// }
// heredaDe(Desarrollador,Persona)

class Desarrollador extends Persona {
    constructor (nombre, apellido, edad, altura) {
        super(nombre, apellido, edad, altura)

    }
    saludar (fn)
    {
        var {nombre, apellido}=this
        console.log(`Hola me llamo ${nombre} y soy dev`)
        if (fn) {
            fn (nombre, apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log (`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`No sabia que eras dev`)
    }
}
// Desarrollador.prototype.saludar = function(){
//     console.log(`Hola me llamo ${this.nombre} y soy dev`)
// }


var lenin = new Persona ('Lenin', 'Bautista','28','1.68')
var sacha = new Desarrollador ('Sacha', 'Lif','27','1.75')
var erika = new Persona ('Erika', 'Lif','29','1.62')

lenin.saludar()
sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)

