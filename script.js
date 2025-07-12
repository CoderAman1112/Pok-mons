

async function fetchPoke(){
    const pokemon = document.querySelector('input').value
    const api = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)

    const data = await api.json()

    const container = document.createElement('div')
    container.style.height = "100%"
    container.style.width = "100%"
    container.style.backgroundColor = "#0D0F14"
    container.style.position = "absolute"
    container.style.top = "0"
    container.style.display = "flex"
    container.style.justifySelf = "center"
    container.style.justifyContent = "center"
    container.style.alignContent = "center"


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

const findPoke = document.querySelector('button')
findPoke.addEventListener("click", () =>{
    fetchPoke()
})