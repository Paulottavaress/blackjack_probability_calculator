// https://vocemaisrico.com/blackjack/
// https://betway.com/en/casino/blackjack
// https://www.businessinsider.com/blackjack-basics-2014-6
// https://www.gamblingsites.com/blog/are-blackjack-games-with-2-to-1-payouts-as-amazing-as-they-seem/
// https://mindfuckmatica.wordpress.com/tag/blackjack/

// Betway Classic Blackjack
const deck = ["Ace", "Ace", "Ace", "Ace", 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, "Jack", "Jack", "Jack", "Jack", "Queen", "Queen", "Queen", "Queen", "King", "King", "King", "King"];
const deck8 = [];
let dealersHand = [];
let openingCard;
let hand = [];
let drawCard;
let handValue = [];
let handValueSum = 0;
let stand = false;
let double = false;
let split = false;
let blackjack = 0;

// Creates an array with 8 decks
for(let i = 0; i < 1; i++){
    deck.forEach(card => {
        deck8.push(card);
    });
}

// Dealer first round
for(let i = 0; i < 2; i++){
    drawCard = Math.abs(Math.round(Math.random()* deck8.length - 1));
    console.log(`Array index to draw card: ${drawCard}`);
    dealersHand.push(deck8[drawCard]);
    console.log(`Dealer's hand: ${dealersHand}`);
    if (dealersHand.length === 1) {
        openingCard = deck8[drawCard];
        console.log(`Dealer's opening card: ${openingCard}`);
    }
    deck8.splice(drawCard, 1);
    console.log(`Deck remainder: ${deck8}`);
    console.log(`Deck length: ${deck8.length}`);
}

// My first round
for(let i = 0; i < 2; i++){
    drawCard = Math.abs(Math.round(Math.random()* deck8.length - 1));
    console.log(`Array index to draw card: ${drawCard}`);
    hand.push(deck8[drawCard]);
    console.log(`My hand: ${hand}`);
    deck8.splice(drawCard, 1);
    console.log(`Deck remainder: ${deck8}`);
    console.log(`Deck length: ${deck8.length}`);
}

//hand.splice(0, 1, 10);
//hand.splice(1, 1, 10);
console.log(hand);
console.log(hand[0]);
console.log(openingCard);

// Points conversion
for(let i = 0; i < 2; i++){
    if (hand[i] === 'Jack' || hand[i] === 'Queen' || hand[i] === 'King'){
        handValue.push(10);
    }  else {
        handValue.push(hand[i]);
    }
    handValueSum += handValue[i];
} 
console.log(handValueSum);

if (openingCard === 'Jack' || openingCard === 'Queen' || openingCard === 'King'){
    openingCardValue = 10;
} else if (openingCard === 'Ace'){
    openingCardValue = 1;
} else{
    openingCardValue = openingCard;
}

console.log(openingCardValue);

//Rules
if (hand[0] === hand[1]){
     if (hand[0] === 'Ace'){
        console.log(`You have ${hand} so SPLIT!`);
        split = true;
     } else if (hand[0] === 2 || hand[0] === 3){
        if (openingCardValue >= 2 && openingCardValue <= 7){
            console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
            split = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
     } else if (hand[0] === 4){
        if (openingCardValue >= 4 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
            split = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
     } else if (hand[0] === 5){
        if (openingCardValue >= 2 && openingCardValue <= 9){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
            double = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
     } else if (hand[0] === 6){
        if (openingCardValue >= 4 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so STAND!`);
            stand = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
     } else if (hand[0] === 7 || hand[0] === 8){
        if (openingCardValue >= 4 && openingCardValue <= 7){
            console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
            split = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
     }  else if (hand[0] === 9){
        if (openingCardValue >= 2 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
            split = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so STAND!`);
            stand = true;
        }
     } else { //10, Jack, Queen and King -> Need to confirm if, fx King and Jack would be considered equal as well
        console.log(`You have ${hand} so STAND!`);
        stand = true;
     } 
} else if (hand[0] === "Ace" || hand[1] === "Ace"){
    if (hand[0] === 2 || hand[1] === 2 || hand[0] === 3 || hand[1] === 3){
        if (openingCardValue >= 5 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
            double = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
    } else if (hand[0] === 4 || hand[1] === 4 || hand[0] === 5 || hand[1] === 5){
        if (openingCardValue >= 4 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
            double = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
    } else if (hand[0] === 6 || hand[1] === 6){
        if (openingCardValue >= 3 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
            double = true;
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        }
    } else if (hand[0] === 7 || hand[1] === 7){
        if (openingCardValue >= 3 && openingCardValue <= 6){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
            double = true;
        } else if (openingCardValue >= 9 && openingCardValue <= 10 || openingCardValue === 'Ace'){
            console.log(`You have ${hand} and the dealer has ${openingCard} so DRAW A CARD!`);
        } else {
            console.log(`You have ${hand} and the dealer has ${openingCard} so STAND!`);
            stand = true;
        }
    } else if (hand[0] === 8 || hand[1] === 8 || hand[0] === 9 || hand[1] === 9){
        console.log(`You have ${hand} so STAND!`);
        stand = true;
    } else {
        console.log(`You have ${hand} so BLACKJACK!!!`);
        stand = true;
        blackjack++;
    }
} else {
    if (handValueSum <= 8){
        console.log(`You have a sum of ${handValueSum} so DRAW A CARD!`);
    } else if (handValueSum === 9){
        if (openingCardValue >= 3 && openingCardValue <= 6){
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DOUBLE`);
            double = true;
        } else {
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DRAW`);
        }
    } else if (handValueSum === 10){
        if (openingCardValue >= 2 && openingCardValue <= 9){
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DOUBLE`);
            double = true;
        } else {
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DRAW`);
        }
    } else if (handValueSum === 11){
        if (openingCardValue >= 2 && openingCardValue <= 10){
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DOUBLE`);
            double = true;
        } else {
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DRAW`);
        }
    } else if (handValueSum >= 12 && handValueSum <= 16){
        if (openingCardValue >= 4 && openingCardValue <= 6){
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so STAND`);
            stand = true;
        } else {
            console.log(`You have a sum of ${handValueSum} and the dealer has ${openingCard} so DRAW`);
        }
    } else if (handValueSum >= 17 && handValueSum <= 20){
        console.log(`You have have a sum of ${handValueSum} so STAND!`);
        stand = true;
    } else {
        console.log(`You have have a sum of ${handValueSum} so BLACKJACK!!!`);
        stand = true;
        blackjack++;
    }
};

if (stand === false) {
    if (split === true){

    } else if (double === true){

    } else {
        
    }
}





