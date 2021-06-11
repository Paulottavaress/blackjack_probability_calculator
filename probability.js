// https://vocemaisrico.com/blackjack/
// https://betway.com/en/casino/blackjack
// https://www.businessinsider.com/blackjack-basics-2014-6
// https://www.gamblingsites.com/blog/are-blackjack-games-with-2-to-1-payouts-as-amazing-as-they-seem/
// https://mindfuckmatica.wordpress.com/tag/blackjack/
// http://www.readybetgo.com/blackjack/strategy/soft-17-rule-2496.html

// Advanced implementation: https://www.youtube.com/watch?v=fvSaTohme-g

// Betway Classic Blackjack
const deck = ["Ace", "Ace", "Ace", "Ace", 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, "Jack", "Jack", "Jack", "Jack", "Queen", "Queen", "Queen", "Queen", "King", "King", "King", "King"];
const gameDeck = [];
let dealersHand = [];
let dealersHandValue = [];
let dealersHandSum = 0;
let openingCard;
let openingCardValue;
let hand = [];
let handValue = [];
let handValueSum = 0;
let splitHand = [];
let drawCard;
let splitHandValue = [];
let splitHandValueSum = 0;
let stand = false;
let double = false;
let split = false;
let blackJack = 0;
let softOrHard = 'hard';
let playerWinCount = 0;
let dealerWinCount = 0;
let drawCount = 0;

// Defines how much money the player has to bet and the return of each bet
let playerMoney = 100;
let dealerMoney = 100000;
let baseBet = 5;
let doubleBet = baseBet * 2;
let strongBet = baseBet * 4;
let currentBet = baseBet;
let blackJackBet = currentBet * 1.5;


// Pass in the number of Black Jack rounds being simulated
numberOfRounds();

function numberOfRounds(roundNumber = 1){
    for (i = 0; i < roundNumber; i++){

        // Creates a deck with the number of full decks passed in
        // 1 - Number of decks in the shoe
        createDecks();
    
        // Dealer draws his first two cards and defines the open and closed cards
        // 1- What deck to add the cards (no default value)
        // 2- Number of cards to draw (1 is the default value)
        // 3- If it is a player's or dealers's hand (player or dealer)(player is the default value)
        drawCards(dealersHand, 2, 'dealer');

        // player draws his first two cards
        drawCards(hand, 2);

        // Manipulating values for testing - temporary
        // Player's first hand
        hand.splice(0, 1, 'Ace');
        hand.splice(1, 1, 'Ace');
        console.log(`That is the player's initial hand after splice ${hand}`);

        // Dealer's first hand               //testar mais softs 17 (11 + 5 + 1 e 11 + 4 + 1 + 1) e hard 17 (1 + 6 + 5 + 5)
        dealersHand.splice(0, 1, 'Ace');
        dealersHand.splice(1, 1, 5);
        console.log(`That is the dealer's initial hand after splice ${dealersHand}`);

        // Converting the hand cards into numbers (Ace = 1 or 11, Jack, Queen and King)
        // 1- What deck to count the cards (no default value)
        // 2- Number of cards to count (1 is the default value) 
        // 3- If it is a player's or dealer's hand (player or dealer)(player is the default value)
        handSum(hand, 2);
        console.log(dealersHand);
        handSum(dealersHand, 2, 'dealer');

        // Converting the dealer's open card into numbers (Ace = 1(this is set due to rules function), Jack, Queen and King)
        // 1 - Opening card to be converted to opening card value
        openCardValue(openingCard);

        // Defines the action to be made according to basic rules in https://vocemaisrico.com/blackjack/
        rules(hand);

        // Makes the move previously defined -> parei aqui revisando essa fórmula
        // 1- What deck to make the move (no default value)
        // 2- Number of the deck to make the move (1st, 2nd, 3rd or 4th)(1st is the default value) 
        nextMove(hand);

        // Defines if the dealer's hand is a soft or hard hand
        isSoft(dealersHandValue);

        // Calculate the dealer's hand sum and if he should stop or not
        dealersFinalHand();

        // Defines the match winner
        winner();

    }
}

// Creates an array with 8 decks
function createDecks(numberOfDecks = 1){
    for(let i = 0; i < numberOfDecks; i++){
        deck.forEach(card => {
            gameDeck.push(card);
        });
    }
}

function drawCards(hand, cardsNumber = 1, deckOwner = 'player'){
    for(let i = 0; i < cardsNumber; i++){
        drawCard = Math.abs(Math.round(Math.random()* gameDeck.length - 1));
        hand.push(gameDeck[drawCard]);
        gameDeck.splice(drawCard, 1);
        if (hand.length === 1 && deckOwner === 'dealer') {
            openingCard = hand[0];
            console.log(`Dealer's open card is a ${openingCard}`);
        }
        if (split === true){
            drawCard = Math.abs(Math.round(Math.random()* gameDeck.length - 1));
            splitHand.push(gameDeck[drawCard]);
            console.log(`Player's second hand: ${splitHand}`);
            gameDeck.splice(drawCard, 1);
        }
    }
    console.log(`The ${deckOwner}'s hand is ${hand}`);
    //console.log(`Deck remainder: ${gameDeck}`);
    //console.log(`Deck length: ${gameDeck.length}`);
}

function handSum(hand, cardsNumber = 1, deckOwner = 'player', handValueSum = 0, aceCounter = 0){
    if (deckOwner === 'player'){
        handValue = [];
    } else if (deckOwner === 'dealer'){
        dealersHandValue = [];
    }
    
    for (i = 0; i < cardsNumber; i++){
        if (hand[i] === 'Jack' || hand[i] === 'Queen' || hand[i] === 'King'){
            handValueSum += 10;
            if (deckOwner === 'player'){
                handValue.push(10);
            } else if(deckOwner === 'dealer'){
                dealersHandValue.push(10);
            }
        }  else if (hand[i] === 'Ace'){
           aceCounter++;
        } else {
            handValueSum += hand[i];
            if (deckOwner === 'player'){
                handValue.push(hand[i]);
            } else if(deckOwner === 'dealer'){
                dealersHandValue.push(hand[i]);
            }
        }
    }
    for (i = 0; i < aceCounter; i++){
        if (handValueSum + 11 > 21){
            handValueSum++;
            if (deckOwner === 'player'){
                handValue.push(1);
            } else if(deckOwner === 'dealer'){
                dealersHandValue.push(1);
            }
        } else {
            handValueSum += 11;
            if (deckOwner === 'player'){
                handValue.push(11);
            } else if(deckOwner === 'dealer'){
                dealersHandValue.push(11);
            }
        }
    }
    if (deckOwner === 'player'){
        console.log(`The ${deckOwner}'s hand converted to points is ${handValue}`);
    } else if(deckOwner === 'dealer'){
        console.log(`The ${deckOwner}'s hand converted to points is ${dealersHandValue}`);
    }
    console.log(`The number of ace cards in the ${deckOwner}'s hand is ${aceCounter}`);
    console.log(`The sum of the ${deckOwner}'s hand is ${handValueSum}`);
    return handValueSum;
}

function openCardValue(openingCard) {
    if (openingCard === 'Jack' || openingCard === 'Queen' || openingCard === 'King'){
        openingCardValue = 10;
    } else if (openingCard === 'Ace'){
        openingCardValue = 1;
    } else{
        openingCardValue = openingCard;
    }
    console.log(`The opening card value is ${openingCardValue}`);
}

//Rules
function rules (hand){
  
    if (hand[0] === hand[1] || split === true){
        if (hand[0] === 'Ace'){
            if (split === true){
                console.log(`You have ${hand} and just splitted aces so you had to STAND.`);
            } else{
                console.log(`You have ${hand} so SPLIT!`);
                split = true;
            }
        } else if (hand[0] === 2 || hand[0] === 3){
           if (openingCardValue >= 2 && openingCardValue <= 7){
               console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
               split = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
        } else if (hand[0] === 4){
           if (openingCardValue >= 4 && openingCardValue <= 6){
               console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
               split = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
        } else if (hand[0] === 5){
           if (openingCardValue >= 2 && openingCardValue <= 9){
               console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
               double = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
        } else if (hand[0] === 6){
           if (openingCardValue >= 4 && openingCardValue <= 6){
               console.log(`You have ${hand} and the dealer has ${openingCard} so STAND!`);
               stand = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
        } else if (hand[0] === 7 || hand[0] === 8){          //always split 8s?
           if (openingCardValue >= 4 && openingCardValue <= 7){
               console.log(`You have ${hand} and the dealer has ${openingCard} so SPLIT!`);
               split = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
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
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
       } else if (hand[0] === 4 || hand[1] === 4 || hand[0] === 5 || hand[1] === 5){
           if (openingCardValue >= 4 && openingCardValue <= 6){
               console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
               double = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
       } else if (hand[0] === 6 || hand[1] === 6){
           if (openingCardValue >= 3 && openingCardValue <= 6){
               console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
               double = true;
           } else {
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
           }
       } else if (hand[0] === 7 || hand[1] === 7){
           if (openingCardValue >= 3 && openingCardValue <= 6){
               console.log(`You have ${hand} and the dealer has ${openingCard} so DOUBLE!`);
               double = true;
           } else if (openingCardValue >= 9 && openingCardValue <= 10 || openingCardValue === 'Ace'){
               console.log(`You have ${hand} and the dealer has ${openingCard} so HIT!`);
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
           blackJack++;
       }
   } else {
        recurrentRules();
   };
}

// recurrent rules

    function recurrentRules (){
        if (handValueSum <= 8){
            console.log(`You have a sum of ${handValueSum} so HIT!`);
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
            blackJack++;
        }
    }

// Second round
function nextMove(hand, deckNumber = '1st'){
    if (stand === false) {
        if (split === true){
            splitHand.push(hand[0]);
            hand.pop();
            drawCards(hand, 1);
            console.log(`The player's ${deckNumber} hand after splitting is ${hand}`);
            //console.log(splitHand);
            handValueSum = handSum(hand, hand.length);
            //handSum(splitHand, 1);
            rules(hand);
            rules(splitHand);
            if (hand[0] === 'Ace'){
                stand = true;
                split = false;
            } else if ((hand[0] === 2 || hand[0] === 3)){
    
            }
        } else if (double === true){
            
        } else {
    
        }
    }
    console.log(`Stand is ${stand}`);
}

// Defining is a hand is soft or hard hand
function isSoft(hand){  //Essa hand precisa ser um array de valores, sem king, queen, jack ou ace
    softOrHard = 'hard';
    for (i = 0; i < hand.length; i++){
        if(hand[i] === 11){
            softOrHard = 'soft';
        } 
    }
    console.log(hand);
    console.log(`The hand is a ${softOrHard} hand`);
}

// Defining dealer`s hand
function dealersFinalHand(){
    if (stand === true){
        dealersHandSum = handSum(dealersHand, 2, 'dealer');
        if (softOrHard === 'soft' && dealersHandSum === 17){
            console.log(`The dealer's hand sum is ${dealersHandSum} and it's a soft hand so he HITS.`);
        } else if(dealersHandSum >= 17){
            console.log(`The dealer's hand sum is ${dealersHandSum} so he STANDS.`);
        }
    }
} 

console.log(handValueSum);
console.log(dealersHandSum);

// The winner
function winner(){
    if(handValueSum > 21){
        console.log(`The DEALER wins because the player went over 21`);
        dealerWinCount++;
    } else if (handValueSum === dealersHandSum){
        if (handValueSum === 21){
            console.log(`Both player and dealer had BLACKJACK so it was a DRAW`);
            drawCount++;
            blackJack++;
        } else {
            console.log(`There is a DRAW so no one wins`);
            drawCount++;
        }
    } else if (handValueSum === 21 ){
        console.log(`The PLAYER wins because he's got a BLACKJACK and the dealer does not!`);
        playerWinCount++;
        blackJack++;
    } else if (dealersHandSum > 21){
        console.log(`The PLAYER wins because the dealer went over 21`);
        playerWinCount++;
    } else if (handValueSum > dealersHandSum){
        console.log(`The PLAYER wins because he got closer to 21 without busting`);
        playerWinCount++;
    } else {
        console.log(`The de DEALER wins because he got closer to 21 without busting`);
        dealerWinCount++;
    }
}









