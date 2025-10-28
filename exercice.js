const ListeMots = ["Cachalot", "Petunia", "Serviette"]
const ListPhrases = ["je suis kilori", "je suis totiolona", "je suis nothorious"]
 /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbm: le nombre de mots proposés à l'utilisateur
//  */

function AfficherScoretNbm(score, nbm) {
    let spanscore = document.querySelector(".score span")

    let affichagecore = `${score} / ${nbm}`

    spanscore.innerText = affichagecore


    console.log("votre points est de: " + score + " sur " + nbm );
}


function Afficherlaprop(propositions) {
    let zoneprop = document.querySelector(".zoneprop")
    zoneprop.innerText = propositions
}


function LancerJeu() {
    let listpropositions = ListeMots
    let score = 0
    let i = 0

    let button = document.querySelector("button")
    let zonesaisie = document.getElementById("Ecriture")

    Afficherlaprop(listpropositions[i])

    button.addEventListener("click", () => {
        console.log(zonesaisie.value);

        if (zonesaisie.value === listpropositions[i]) {
            score++
        }
        i++
          AfficherScoretNbm(score,i)

        zonesaisie.value = ""

        if (ListeMots[i] === undefined) {
            Afficherlaprop("Le jeu est fini !")
            button.disabled = true
        } else {
                Afficherlaprop( listpropositions[i])
        }
    })

    
let spanscore = document.querySelector(".score span")
console.log(spanscore);

let listradio = document.querySelectorAll(".idradio input")
for (let j = 0; j < listradio.length; j++){
    listradio[j].addEventListener("change", (event) => {
       console.log(event.target.value);
       
        if ( event.target.value === "1") {
            listpropositions = ListeMots
        } else {
            listpropositions = ListPhrases
        }
           Afficherlaprop(listpropositions[i])
    })
}

    AfficherScoretNbm(score,i)
}


LancerJeu()

let form = document.querySelector("form")
let baliseNom = document.getElementById("votreNom")

function verifierchamps(balise) {
    if(balise.value === "") {
        balise.classlist.add("error")
        console.log("error")
    } else {
         balise.classlist.remove("error")
    }
}

form.addEventListener("submit",(event) => {
    event.preventDefault()
    verifierchamps(baliseNom)
})

// let baliseNom = document.getElementById('nom');
// let form = document.querySelector("form")

// function verifierchamps(balise) {
//     if (balise.value === "") {
//         balise.classlist.add("error")
//     } else {
//         balise.classlist.remove("error")
//     }
// }

// form.addEventListener("submit", (event) => {
//     event.preventdefault()
//     verifierchamps(baliseNom)
// })

// baliseNom.addEventListener("change", (event) => {
//     verifierchamps(baliseNom)
