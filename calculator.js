
// // LES CHIFFRES

// document.getElementById("chiffre1").addEventListener("click", () => {
//     let chiffre1 = parseInt(document.getElementById("chiffre1").textContent);
//     console.log(chiffre1);
// })
// document.getElementById("chiffre2").addEventListener("click", () => {
//     let chiffre2 = parseInt(document.getElementById("chiffre2").textContent);
//     console.log(chiffre2);
// })
// document.getElementById("chiffre3").addEventListener("click", () => {
//     let chiffre3 = parseInt(document.getElementById("chiffre3").textContent);
//     console.log(chiffre3);
// })
// document.getElementById("chiffre4").addEventListener("click", () => {
//     let chiffre4 = parseInt(document.getElementById("chiffre4").textContent);
//     console.log(chiffre4);
// })
// document.getElementById("chiffre5").addEventListener("click", () => {
//     let chiffre5 = parseInt(document.getElementById("chiffre5").textContent);
//     console.log(chiffre5);
// })
// document.getElementById("chiffre6").addEventListener("click", () => {
//     let chiffre6 = parseInt(document.getElementById("chiffre6").textContent);
//     console.log(chiffre6);
// })
// document.getElementById("chiffre7").addEventListener("click", () => {
//     let chiffre7 = parseInt(document.getElementById("chiffre7").textContent);
//     console.log(chiffre7);
// })
// document.getElementById("chiffre8").addEventListener("click", () => {
//     let chiffre8 = parseInt(document.getElementById("chiffre8").textContent);
//     console.log(chiffre8);
// })
// document.getElementById("chiffre9").addEventListener("click", () => {
//     let chiffre9 = parseInt(document.getElementById("chiffre9").textContent);
//     console.log(chiffre9);
// })
// document.getElementById("chiffre0").addEventListener("click", () => {
//     let chiffre0 = parseInt(document.getElementById("chiffre0").textContent);
//     console.log(chiffre0);
// })

// // LES OPERATEURS MATHEMATIQUES

// document.getElementById("operateurAddition").addEventListener("click",() =>{
//     let operateurAddition = document.getElementById("operateurAddition").textContent;
//     console.log(operateurAddition);
// })
// document.getElementById("operateurSoustraction").addEventListener("click",() =>{
//     let operateurSoustraction = document.getElementById("operateurSoustraction").textContent;
//     console.log(operateurSoustraction);
// })
// document.getElementById("operateurMultiplication").addEventListener("click",() =>{
//     let operateurMultiplication = document.getElementById("operateurMultiplication").textContent;
//     console.log(operateurMultiplication);
// })
// document.getElementById("operateurDivision").addEventListener("click",() =>{
//     let operateurDivision = document.getElementById("operateurDivision").textContent;
//     console.log(operateurDivision);
// })
// document.getElementById("operateurResultat").addEventListener("click",() =>{
//     let operateurResultat = document.getElementById("operateurResultat").textContent;
//     console.log(operateurResultat);
// })


// // LES BOUTONS PARTICULIERS

// document.getElementById("parentheseOuverte").addEventListener("click", () => {
//     let parentheseOuverte = document.getElementById("parentheseOuverte").textContent;
//     console.log(parentheseOuverte);
// })

// document.getElementById("parentheseFermee").addEventListener("click", () => {
//     let parentheseFermee = document.getElementById("parentheseFermee").textContent;
//     console.log(parentheseFermee);
// })

// document.getElementById("pourcentage").addEventListener("click", () => {
//     let pourcentage = document.getElementById("pourcentage").textContent;
//     console.log(pourcentage);
// })

// document.getElementById("init").addEventListener("click", () => {
//     let init = document.getElementById("target");
//     let initialisation = init.textContent=0;
//     console.log(init);

// })

// document.getElementById("virgule").addEventListener("click", () => {
//     let virgule = document.getElementById("virgule").textContent;
//     console.log(virgule);
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('.buttons button');
    
//         buttons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const value = button.getAttribute('data-value');

//                 if (value === 'AC') {
//                     display.textContent = '';
//                 } else if (value === '=') {
//                     try {
//                         display.textContent = eval(display.textContent);
//                     }catch {
//                         display.textContent = 'Error';
//                     }
//                 } else {
//                     display.textContent += value;
//                 }
//             })
//         })
// })


document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    
    if (!display || buttons.length === 0) {
        console.error('Display element or buttons not found');
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'init') {
                display.textContent = '';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent);
                    if (display.textContent == '35383773' ){
                        alert("Gros cochon va !!");
                    }
                } catch (error) {
                    display.textContent = 'Error';
                    console.error('Error evaluating expression:', error);
                }
            } else {
                display.textContent += value;
                console.log(value);
            }
        });
    });
});