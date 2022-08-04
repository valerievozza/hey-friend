const encouragement = document.getElementById("encouragement")
const cat = document.getElementById("cat")
const selfCare = document.getElementById("selfCare")

encouragement.addEventListener("click", giveEncouragement)
cat.addEventListener("click", giveCat)
selfCare.addEventListener("click", giveSelfCareTip)

function giveEncouragement() {
    const wordsOfEncouragement = [
    "Good job!",
    "You're doing your best.",
    "I'm proud of you.",
    "I appreciate you."
]

    const max = wordsOfEncouragement.length - 1
    const random = Math.floor(Math.random() * max)

    console.log(wordsOfEncouragement[random])
    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = wordsOfEncouragement[random]
}

function giveSelfCareTip() {
    const selfCareTips = [
    "Take a walk.",
    "Take a hot shower.",
    "Eat a vegetable.",
    "Take 3 long slow deep breaths & exhale slowly."
]

    const max = selfCareTips.length - 1
    const random = Math.floor(Math.random() * max)

    console.log(selfCareTips[random])
    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = selfCareTips[random]
}

function giveCat() {

    fetch(`https://api.thecatapi.com/v1/images/search?api_key=CAT_API_KEY`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].url)
    document.getElementById("responseText").innerHTML = ""
    document.getElementById("responseImage").src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}