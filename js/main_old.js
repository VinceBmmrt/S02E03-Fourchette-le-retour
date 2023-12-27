// Que veut-on coder exactement ?

// On veut faire un jeu

// Plan d'action :
// 1- On veut générer un nombre entier aléatoire compris entre 0 et 500 (Math.random()), à faire deviner par l'utilisateur
// 2- Demander à l'utilisateur de deviner le nombre via un prompt puis convertir la valeur retournée par le prompt en nombre
// 3- On va créer une boucle while qui va tester : Tant que la valeur entrée par l'user est différente du nombre aléatoire généré en étape 1
// 4- SI la valeur fournie par l'utilisateur est nulle (ou undefined), ALORS on sort de la boucle
// 5- SI le nombre fourni est trop grand, ALORS, on indique à l'utilisateur que le nb est trop grand, et on l'invite à rejouer
// 6- SI le nombre fourni est trop petit, ALORS, on indique à l'utilisateur que le nb est trop petit, et on l'invite à rejouer
// 7- Si l'utilisateur a trouvé le bon numéro, ALORS on lui indique qu'il a gagné
// 8- SI l'utilisateur abandonne, ALORS  on lui affiche un message pour lui indiquer qu'il a abandonné

// Plan d'action pour le bonus
// Bonus-1- au début du programme, on va initialiser un compteur de tentatives. on l'initialise à 1
// Bonus-2- On va incrémenter ce compteur de 1 dans les cas où l'user a donné la mauvaise réponse
// Bonus-3- Dans le message de victoire, on affiche le compteur

// Bonus-1- au début du programme, on va initialiser un compteur de tentatives. on l'initialise à 1
let attempts = 1;

// 1- On veut générer un nombre entier aléatoire compris entre 0 et 500 (Math.random()), à faire deviner par l'utilisateur
const searchedNumber = Math.round(Math.random() * 500);

// 2- Demander à l'utilisateur de deviner le nombre via un prompt puis convertir la valeur retournée par le prompt en nombre
let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

// 3- On va créer une boucle while qui va tester : Tant que la valeur entrée par l'user est différente du nombre aléatoire généré en étape 1
while (enteredNumber !== searchedNumber) {
    // 4- SI la valeur fournie par l'utilisateur est nulle (ou undefined), ALORS on sort de la boucle
    if (!enteredNumber) { // SI not enteredNumber => Si enteredNumber est faux (n'existe pas)
        // console.log(enteredNumber); // A tester ce soir ;)
        alert('Vous abandonnez ? Dommage...')
        break;
    }
    // 5- SI le nombre fourni est trop grand, ALORS, on indique à l'utilisateur que le nb est trop grand, et on l'invite à rejouer
    else if (enteredNumber > searchedNumber) {
        enteredNumber = parseInt(prompt('Le nombre a deviner est plus petit !'));
    }
    // 6- SI le nombre fourni est trop petit, ALORS, on indique à l'utilisateur que le nb est trop petit, et on l'invite à rejouer
    else {
        enteredNumber = parseInt(prompt('Le nombre a deviner est plus grand !'));
    }

    // Bonus-2- On va incrémenter ce compteur de 1 dans les cas où l'user a donné la mauvaise réponse
    attempts++;
}

// 7- Si l'utilisateur a trouvé le bon numéro, ALORS on lui indique qu'il a gagné
if (enteredNumber) {
    // Bonus-3- Dans le message de victoire, on affiche le compteur
    alert(`Bravo, vous avez gagné en ${attempts} coups !`);
} 
// 8- SI l'utilisateur abandonne, ALORS  on lui affiche un message pour lui indiquer qu'il a abandonné
else {
    alert('Vous abandonnez ? Dommage...');
}




