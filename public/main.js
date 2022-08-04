const encouragement = document.getElementById("encouragement")
const cat = document.getElementById("cat")

encouragement.addEventListener("click", giveEncouragement)
cat.addEventListener("click", giveCat)

function giveEncouragement() {
    const wordsOfEncouragement = [
    "Good job!",
    "You're doing your best.",
    "I'm proud of you.",
    "I appreciate you."
]
    const random = Math.floor(Math.random() * max)
    const max = wordsOfEncouragement.length - 1

    console.log(wordsOfEncouragement[random])
    document.getElementById("response").innerText = wordsOfEncouragement[random]
}

function giveCat() {

    fetch(`https://api.thecatapi.com/v1/images/search?api_key=CAT_API_KEY`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].url)

    document.getElementById("responseImage").src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}