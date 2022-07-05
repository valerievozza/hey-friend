// none of this is working halp


function giveEncouragement() {
    const encouragement = document.getElementById("encouragement")
    const wordsOfEncouragement = [
    "Good job!",
    "You're doing your best.",
    "I'm proud of you.",
    "I appreciate you."
]

    console.log(wordsOfEncouragement)
    document.getElementById("response").innerText = wordsOfEncouragement
}

encouragement.addEventListener("click", giveEncouragement)