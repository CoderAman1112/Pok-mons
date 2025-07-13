

async function fetchPoke(){
    const pokemon = document.querySelector('input').value
    const api = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)

    if(!api.ok){
        const container = document.createElement('div')
        document.body.appendChild(container)

        const h2 = document.createElement("h2")
        document.body.appendChild(h2)
        h2.innerHTML = "Pokemon Not Found!"
        h2.style.color = "#cbcdd1"
    }

    const data = await api.json()

    const container = document.createElement('div')
    document.body.appendChild(container)

    const img = document.createElement('img')
    container.appendChild(img)
    img.src = data.sprites.front_default
    img.style.height = "30%"
    img.style.width = "auto"
    img.style.marginTop = "200px"

    const h2 = document.createElement("h2")
    document.body.appendChild(h2)
    h2.innerHTML = data.name.toUpperCase()

    const p = document.createElement("p")
    document.body.appendChild(p)
    p.innerHTML = ("Pokédex number " + data.id)

}

function newPokemon(){

    const container = document.createElement('div')
    document.body.appendChild(container)
    
    const img = document.createElement('img')
    container.appendChild(img)
    img.src = "./img-2.jpeg"
    img.style.height = "30%"
    img.style.width = "auto"
    img.style.marginTop = "200px"
    
    const h2 = document.createElement("h2")
    document.body.appendChild(h2)
    h2.innerHTML = "SHUBHAM"
    
    const p = document.createElement("p")
    document.body.appendChild(p)
    p.innerHTML = ("Pokédex number 50")

}

function errorHandle(){
    const container = document.createElement('div')
    document.body.appendChild(container)

    const h2 = document.createElement("h2")
    document.body.appendChild(h2)
    h2.innerHTML = "Pokemon Not Found! \nOnly 1,025 Pokémons are officially signed"
    h2.style.color = "#cbcdd1"
}

const findPoke = document.querySelector('button')
findPoke.addEventListener("click", () =>{
    const pokemon = document.querySelector('input').value
    if(pokemon.toLowerCase()=="shubham" || pokemon=="50" || pokemon==50){
        newPokemon()
    }
    else if(Number(pokemon)>1025){
        errorHandle()
    }
    else{
        fetchPoke()
    }
})