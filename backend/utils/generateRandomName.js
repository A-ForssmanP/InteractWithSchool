function generateRandomName(maxQty=3) {
    const names = ["Oliver","William","Matteo","Noah","Liam","Todd", 
        "Billy","Ralf","Birk","Tage","Folke","Sven","Nils","Bill","Ted","Otis",
        "Agnes","Maja","Alma","Vera","Selma","Alba","Hedda","Elsa","Ebba",
        "Fatima","Nadia","Miriam","Hedvig","Idun","Astrid","Ingrid"
    ]
    //get random quantity number
    const qty = Math.floor(Math.random()*maxQty+1)
    const namesArray = [];
    //generate a name 
    for(let i = 0; i < qty; i++) {
        const randomIndexNumber = Math.floor(Math.random() * names.length)
        const name = names[randomIndexNumber]
        namesArray.push(name)
    }
    return namesArray
}

const names = generateRandomName()
console.log(names)

module.exports = generateRandomName