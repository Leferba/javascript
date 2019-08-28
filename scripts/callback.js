const mainURL = 'https://swapi.co/api/'
const peopleID = 'people/id'

const ops = {crossDomain : true}


function imprimirPersonaje(id, callback) {
    const url = `${mainURL}${peopleID.replace('id',id)}`
    
    $.get (url,ops,function(person){
        console.log(`Hola soy ${person.name}`)
        // console.log(arguments)
        if (callback){
            callback ()
        }
    })
}

imprimirPersonaje (1, function () {
    imprimirPersonaje (2, function() {
        imprimirPersonaje (3, function(){
            imprimirPersonaje (4)
        } )
    })
})

