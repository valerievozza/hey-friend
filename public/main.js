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

    const max = wordsOfEncouragement.length
    const random = Math.floor(Math.random() * max)

    console.log(wordsOfEncouragement[random])
    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = wordsOfEncouragement[random]
    document.querySelector('#save').classList.toggle('hidden')

    // document.querySelector('#save').addEventListener('click', saveThisItem)

    function saveThisItem() {
        if (localStorage.getItem('items') == null) {
            localStorage.setItem('items', '[]')
        }
        let existingItems = JSON.parse(localStorage.getItem('items'));
        existingItems.push(wordsOfEncouragement[random])

        console.log(existingItems)

        localStorage.setItem('items', JSON.stringify(existingItems));
    }
    
    saveThisItem()

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

    console.log(selfCareTips[random])
    document.getElementById("responseImage").src = ""
    document.getElementById("responseText").innerText = selfCareTips[random]
    document.querySelector('#save').classList.toggle('hidden')
}

function giveCat() {

    fetch(`https://api.thecatapi.com/v1/images/search?api_key=CAT_API_KEY`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].url)
    document.getElementById("responseText").innerHTML = ""
    document.getElementById("responseImage").src = data[0].url
    document.querySelector('#save').classList.toggle('hidden')
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

//let thisItem = document.getElementById('item').innerHTML

// let item = []

// if (!localStorage.getItem('items')) {
//     localStorage.setItem('items', item)
// }

// // document.querySelector('#save').addEventListener('click', saveThisItem)

// function saveThisItem() {
//     item.push('thisItem')
//     localStorage.setItem('items', item)
// }