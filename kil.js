
// // let score = 0


// // if (choix === "mot") {

// //     console.log("votre score est de " + score + " sur " + listmots.length);
// // } else {
// //     for (let j = 0; j < listphrases.length; j++) {
// //         let phraseutilisateur = prompt("entrez la phrase: " + listphrases[j])
// //             if (phraseutilisateur === listphrases[j]) {
// //                 score++
// //             }
// //     }

// // } f

// const listmots = ["cachalot","petunia","serviette"]
// const listphrases= ["je suis kilori"," je suis totiolona","je suis nothorious"]

// /**
//  * il nous faut deux parametre.
//  *
//  * @param {number} score - donne le score (facultatif).
//  * @param {nomber} nbmotproposer*/

// function afficherprop(propositiion){
//     let zoneprop = document.querySelector("#motproposer")
//     zoneprop.innerHTML = propositiion
// }

// function afficherresultat(score, nbmotproposer) {
//     console.log("votre scort est de " + score + " sur " + nbmotproposer);
// }


// function lancerjeu() {
//     let score = 0
//     let i = 0
//     let listprop = listphrases

//     let button = document.getElementById("valider")
//     let inputecriture = document.getElementById("inputecriture")
//     button.addEventListener("click", function() {
//         console.log(inputecriture.value)
//         inputecriture.value = ""
//         if (inputecriture.value === listprop[i]) {
//             score+1
//         }
//         i++

//          afficherresultat(score, i)
//         if (listprop[i] === undefined) {
//             afficherprop("le jeux est fini")
//             valider.disabled = true
//         } else {
//             afficherprop(listprop[i])

//         }
        
        
//     })

//     let listradio = document.querySelectorAll(".radio input")
//     for (let index = 0; index < listradio.length ; index++) {
//         listradio[index].addEventListener("change", (event) => {
//             console.log(event.target.value);
//             if (event.target.value === 2) {
//                 listprop === listphrases
//             }
//               afficherprop(listprop[i])
//         })
//     }
//     afficherresultat(score, i)
// }

// lancerjeu()

// let form = document.querySelector("form")

// form.addEventlistener("submit", () => {
//     let nom = document.getElementById("nom")
//     console.log(nom);
    
//  })