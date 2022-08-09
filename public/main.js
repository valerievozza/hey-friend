const encouragement = document.getElementById("encouragement")
const cat = document.getElementById("cat")
const selfCare = document.getElementById("selfCare")
const vent = document.getElementById("vent")

encouragement.addEventListener("click", giveEncouragement)
cat.addEventListener("click", giveCat)
selfCare.addEventListener("click", giveSelfCareTip)
vent.addEventListener("click", writeVent)

function giveEncouragement() {
    const wordsOfEncouragement = [
    "Good job!",
    "You're doing your best.",
    "I'm proud of you.",
    "I appreciate you."
]

    const max = wordsOfEncouragement.length
    const random = Math.floor(Math.random() * max)

    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = wordsOfEncouragement[random]
    document.getElementById("ventArea").hidden = true
    document.getElementById("responseImage").classList.remove('image-container')
}

function giveSelfCareTip() {
    const selfCareTips = [
    "Take a walk.",
    "Take a hot shower.",
    "Eat a vegetable.",
    "Take 3 long slow deep breaths & exhale slowly."
]

    const max = selfCareTips.length
    const random = Math.floor(Math.random() * max)

    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = selfCareTips[random]
    document.getElementById("ventArea").hidden = true
    document.getElementById("responseImage").classList.remove('image-container')
}

function giveCat() {

    const url = `https://api.thecatapi.com/v1/images/search?api_key=CAT_API_KEY`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].url)
    document.getElementById("responseText").innerText = ""
    document.getElementById("responseImage").src = data[0].url
    document.getElementById("responseImage").classList.add('image-container')
    document.getElementById("ventArea").hidden = true
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function writeVent() {
    document.getElementById("responseText").innerText = ""
    document.getElementById("responseImage").src = ""
    document.getElementById("ventArea").classList.remove('hidden')
    document.getElementById("ventArea").hidden = false
    document.getElementById("responseImage").classList.remove('image-container')
}