
function checkPalindrome(mot) {
    let motIverser = mot.split('').reverse().join('')

    return mot.toLowerCase() === motIverser.toLowerCase()

}


function verifierPalindrome () {
    const mot = document.getElementById("Input").value
    let resultatCheck = document.getElementById ("Propos")
    if (checkPalindrome(mot)) {
        resultatCheck.innerHTML = "vous avez checker : le mot un est un palindrome"
    } else {
        resultatCheck.innerHTML = "ce n'est n'est pas un palindrome"
    } 
}

let buttonCkeck = document.getElementById("Click")
buttonCkeck.addEventListener("click", verifierPalindrome)

//     let propos = document.querySelector(".Propos")
    
//     let resultatCheck = `${"vous avez checker"}`

//     button.addEventListener("click", (event) => {
//         event.preventDefault()
//         console.log(zoneSaisis.value);
//         propos.innerHTML = resultatCheck
//     })
// }
