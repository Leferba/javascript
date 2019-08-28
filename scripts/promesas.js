const mainURL = 'https://swapi.co/api/'
const peopleID = 'people/id'
const ops = {crossDomain : true}


function imprimirPersonaje(id) {
    return new Promise  (function(resolve, reject){

        const url = `${mainURL}${peopleID.replace('id',id)}`
           
        $ .get (url,ops,function(data){
            resolve(data)
        })
          .fail(function(){
              reject(id)
          })
    })       
}

function OnError(id){
    console.log(`Error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7,8, 9, 10]

// var promesas =ids.map (function(id){
//     return imprimirPersonaje(id)
// })

var promesas =ids.map (id=> imprimirPersonaje(id))

Promise
.all(promesas)
.then (personaje => console.log(personaje))
.catch(OnError)

// imprimirPersonaje (1)
// .then(function(personaje){
//     console.log(`El personaje 1 es ${personaje.name}`)
//     return imprimirPersonaje(2)
// })
// .then(function(personaje){
//     console.log(`El personaje 2 es ${personaje.name}`)
//     return imprimirPersonaje(3)
// })
// .then(function(personaje){
//     console.log(`El personaje 3 es ${personaje.name}`)
//     return imprimirPersonaje(4)
// })
// .then(function(personaje){
//     console.log(`El personaje 4 es ${personaje.name}`)
//     return imprimirPersonaje(5)
// })
// .then(function(personaje){
//     console.log(`El personaje 5 es ${personaje.name}`)
// })
// .catch(OnError)


