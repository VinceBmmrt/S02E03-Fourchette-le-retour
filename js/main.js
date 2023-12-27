const game = {
    attempts: 1,
    searchedNumber: 0,
    score: [],
    messages: {
        prompts: {
            intro: "Salut les geeks, quel est le nombre à trouver ?",
            tooHigh: 'Le nombre a deviner est plus petit (chenapan) !',
            tooLow: 'Le nombre a deviner est plus grand !',
        },
        alert: {
            giveUp: 'Petite nature xD'
        }
    },
}


function generateRandomNumber(min, max) {
    const randomBase = Math.random();      // Je génère un nb a virgule aléatoire entre 0 et 1
    const randomNumber = randomBase * (max - min) + min;
    const roundedRandomNumber = Math.round(randomNumber);
    return roundedRandomNumber;
}



function play() {
    game.searchedNumber = generateRandomNumber(0, 500);
    console.log(game.searchedNumber);
    game.attempts = 1;
    
    game.enteredNumber = parseInt(prompt(game.messages.prompts.intro));
    

    while (game.enteredNumber !== game.searchedNumber) {
        if (!game.enteredNumber) {
            break;
        }
        else if (game.enteredNumber > game.searchedNumber) {
            game.enteredNumber = parseInt(prompt(game.messages.prompts.tooHigh));
        }
        else {
            game.enteredNumber = parseInt(prompt(game.messages.prompts.tooLow));
        }
        game.attempts++;
    }

    if (game.enteredNumber) {
        game.score.push(game.attempts);
        console.log(game.score);
        alert(`Bravo, vous avez gagné en ${game.attempts} coups !`);
    } 
    else {
        alert(game.messages.alert.giveUp);
    }

    const replay = confirm("Voulez vous rejouer ?");
    if(replay) {
        play();
    }
}

play();


