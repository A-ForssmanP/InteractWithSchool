const generateLastName = (qty) => {
    const lastNames = ["Andersson","Johansson","Hansson","Sjöberg","Nyström","Berggren","Ek","Holmgren","Dahl",
        "Ekström","Falk","Olsson","Levin","Ingvarsson","Thulin","Åberg","Adolfsson","Claesson","Edin","Forsell",
        "Grönlund","Granström","Gabrielsson","Hagberg","Hallström","Jansson","Johnson","Jarl","Knutsson","Kjellberg",
        "Li","Malm","Nord","Olander","Palm","Rask","Salomonsson"
    ]
    //shuffle names
    const shuffled = []
    const timesToLoop = lastNames.length
    for(let i = 0; i <timesToLoop; i++) {
        const randomNum = Math.floor(Math.random()*lastNames.length)
        shuffled.push(lastNames[randomNum])
        lastNames.splice(randomNum,1)
    }
    
    return shuffled.slice(0,qty)
}

module.exports = generateLastName