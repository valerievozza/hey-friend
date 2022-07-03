// none of this is working halp

const encouragement = document.getElementById("encouragement")
const wordsOfEncouragement = [
    "Good job!",
    "You're doing your best.",
    "I'm proud of you.",
    "I appreciate you."
]

function giveEncouragement() {
    console.log(wordsOfEncouragement[0])
    document.getElementById("response").innerText
}

encouragement.addEventListener("click", giveEncouragement)