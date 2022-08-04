// none of this is working halp
const encouragement = document.getElementById("encouragement")


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
    document.getElementById("response").innerText = wordsOfEncouragement[random]
}

encouragement.addEventListener("click", giveEncouragement)