<template>
    <div class="full-width full-height relative bg-table light-color flex-row self-align-center max-width-xl pa-md">
        <app-dealers-shoe-left :dealersShoe="dealersShoe" :dealersShoeLength="dealersShoeLength" />
        <app-dealers-hand v-if="isGameRunning" :dealersHand="dealersHand" />
        <app-players-hand v-if="isGameRunning" :playersHand="playersHand" />
        <div class="flex-column full-width absolute zero-bottom">
            <div v-if="!isGameRunning" class="flex-row text-center justify-center">
                <p>Insert the number of decks you will be playing with:</p>
                <input type="number" v-model="numberOfDecks">
                <button @click="startGame">START GAME</button>
            </div>
            <div v-else class="flex-row text-center justify-center">
                <div>
                    <p>Dealer's opening card:</p>
                    <input type="string" v-model="openingCard">
                    <button @click="addSuitToHand('dealer', openingCard)">ADD TO DEALER'S</button>
                </div>
                <div>
                    <p>Your hand:</p>
                    <input type="string" v-model="suitToPlayersHand">
                    <button @click="addSuitToHand('player', suitToPlayersHand)">ADD TO PLAYER'S</button>
                </div>
                <div>
                    <p>Remove suit from the dealer's shoe:</p>
                    <input type="string" v-model="suitToBeRemoved">
                    <button @click="removeSuit(suitToBeRemoved)">POP SUIT</button>
                </div>
            </div>
        </div>
        <app-dealers-shoe-right :dealersShoe="dealersShoe" :dealersShoeLength="dealersShoeLength" />
    </div>
</template>

<script>
import DealersShoeLeft from './DealersShoeLeft';
import DealersShoeRight from './DealersShoeRight';
import DealersHand from './DealersHand';
import PlayersHand from './PlayersHand';

export default {
    data() {
        return {
            isGameRunning: false,
            currentRound: 0,
            numberOfDecks: 1,
            deck: ['Ace', 'Ace', 'Ace', 'Ace', '2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9', '9', '9', '10', '10', '10', '10', 'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King'],
            dealersShoe: [],
            dealersShoeLength: 0,
            suitToBeRemoved: '',
            playersHand: [],
            suitToPlayersHand: '',
            dealersHand: [],
            openingCard: ''
        }
    },
    components: {
        'app-dealers-shoe-left': DealersShoeLeft,
        'app-dealers-shoe-right': DealersShoeRight,
        'app-players-hand': PlayersHand,
        'app-dealers-hand': DealersHand,
    },
    methods: {
        startGame() {
            this.isGameRunning = true;
            this.resetGameStatus();
            this.createDecks();
            this.currentRound = 1;
        },
        resetGameStatus(){
            this.dealersShoe = [];
            this.currentRound = 0;
            this.dealersShoeLength = 0;
        },
        createDecks() {
            for(let i = 0; i < this.numberOfDecks; i++){
                this.deck.forEach(card => {
                    this.dealersShoe.push(card);
                    this.dealersShoeLength++;
                });
            }
        },
        removeSuit(suit) {
            const index = this.dealersShoe.indexOf(this.formatInput(suit));

            if (index > -1) {
                this.dealersShoe.splice(index, 1);
                this.dealersShoeLength--;
            }
        },
        formatInput(input) {
            input = input.toLowerCase();
    
            if (input === 'ace' || input === 'jack' || input === 'queen' || input === 'king') {
                let suit = '';
                
                input.split('').forEach((letter, i) => {
                    if (i === 0) {
                        letter = letter.toUpperCase();
                    } 
                    suit += letter;
                })
                return suit;
            } 
            return input;
        },
        addSuitToHand(handOwner, suit) {
            // Ace Jack Ace player hand

            const parsedSuit = this.formatInput(suit);

            const index = this.dealersShoe.indexOf(parsedSuit);

            if (index > -1) {
                handOwner === 'player'
                    ? this.playersHand.push(parsedSuit)
                    : this.dealersHand.push(parsedSuit);
                this.removeSuit(suit);     
            }
            console.log('playersHand', this.playersHand);
            // console.log('dealersHand', this.dealersHand);
        }
    },
}
</script>

<style scoped>
</style>