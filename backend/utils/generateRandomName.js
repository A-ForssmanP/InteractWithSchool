function generateRandomName(maxQty=3) {
    const names = ["Oliver","William","Matteo","Noah","Liam","Todd", 
        "Billy","Ralf","Birk","Tage","Folke","Sven","Nils","Bill","Ted","Otis",
        "Agnes","Maja","Alma","Vera","Selma","Alba","Hedda","Elsa","Ebba",
        "Fatima","Nadia","Miriam","Hedvig","Idun","Astrid","Ingrid"
    ]
    //get random quantity number
    const qty = Math.floor(Math.random()*maxQty+1)
    // if minQty is > qty, then qty = minQty

    const namesArray = [];
    //generate a name 
    for(let i = 0; i < qty; i++) {
        let nameExists = true
        // generate a name and check if it allready exist, if so, generate a new name
        while(nameExists) {
            nameExists = false
            const randomIndexNumber = Math.floor(Math.random() * names.length)
            const name = names[randomIndexNumber]
            //check if name already exist in namesArray
            const exists = namesArray.some((n)=>n === name)
            if(exists) {
                nameExists = true
            } else {
                namesArray.push(name)
            }
        }
    }
    return namesArray
}

module.exports = generateRandomName