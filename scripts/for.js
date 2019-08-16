var lenin = 
{
    nombre: 'Lenin',
    apellido:'Bautista',
    edad: 28,
    peso: 80
}

console.log(`Al inicio del año ${lenin.nombre} pesa ${lenin.peso} kg. ` );

const INCREMENTO =0.3;
const aumentarDePeso = persona => persona.peso+= INCREMENTO;
const bajarDePeso = persona => persona.peso-= INCREMENTO;
const descansa =() => Math.random()<0.3;
const haceDeporte =() => Math.random()>0.4;
var dias =0;
const META = lenin.peso-3;

while (lenin.peso>META) 
{
    if (descansa()) 
    {
    aumentarDePeso(lenin) 
    }
    if (haceDeporte()) 
    {
    bajarDePeso(lenin) 
    }
dias +=1
}

// for (var i = 1; i<= 365; i++)
// {
//     var random = Math .random()

//     if (random<0.25)
//     {
//         aumentarDePeso(lenin)  
//     } 
//     else if (random<0.5) 
//     { 
//         bajarDePeso(lenin)  
//     }
// }
// console.log(`Al final del año ${lenin.nombre} pesa ${lenin.peso.toFixed(2)} kg. ` );
console.log(`Pasaron ${dias} días hasta que ${lenin.peso.nombre} bajó 3kg. ` );

