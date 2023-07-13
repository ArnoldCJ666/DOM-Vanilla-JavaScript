// callback functions in synchronous

const names = ['james', 'jess', 'lily', 'susan']

// names.forEach((name) => {
//    console.log(name);
//})

const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

myForEach(names, (name) => {
    console.log(name);
})

// asynch examples

 const loadPokemon = (id, cb) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
})