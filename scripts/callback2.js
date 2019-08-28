const mainURL = 'https://swapi.co/api/'
const peopleID = 'people/id'

const ops = {crossDomain : true}


function imprimirPersonaje(id, callback) {
    const url = `${mainURL}${peopleID.replace('id',id)}`
       
    $
        .get (url,ops,callback)
        .fail(function(){
            .fail(function(){
        console.log(`existe un error con el personaje ${id}`)})
        
}

imprimirPersonaje (1, function (person) {
    console.log(`Hola soy ${person.name}`)

    imprimirPersonaje (2, function(person) {
        console.log(`Hola soy ${person.name}`)

        imprimirPersonaje (3, function(person){
            console.log(`Hola soy ${person.name}`)

            imprimirPersonaje (4, function (person){
                console.log(`Hola soy ${person.name}`)
            })
        })
    })
})

