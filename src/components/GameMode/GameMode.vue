<template>
    <h5>SIMULATOR</h5>
    <div class="container">
        <app-dealers-shoe :dealersShoe="dealersShoe" :dealersShoeLength="dealersShoeLength" />
        <app-players-hand :playersHand="playersHand" />
        <div class="config-area">
            <div v-if="!isGameRunning">
                <p>Insert the number of decks you will be playing with:</p>
                <input type="number" v-model="numberOfDecks">
                <button @click="startGame">START GAME</button>
            </div>
            <div v-else>
                <div>
                    <p>Dealer's opening card:</p>
                    <input type="string" v-model="openingCard">
                    <button @click="removeSuit(openingCard)">POP SUIT</button>
                </div>
                <div>
                    <p>Your hand:</p>
                    <input type="string" v-model="suitToBeAddedToHand">
                    <button @click="addSuitToHand">ADD TO HAND</button>
                </div>
                <div>
                    <p>Remove suit from the dealer's shoe:</p>
                    <input type="string" v-model="suitToBeRemoved">
                    <button @click="removeSuit(suitToBeRemoved)">POP SUIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DealersShoe from './DealersShoe';
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
            suitToBeAddedToHand: '',
            openingCard: ''
        }
    },
    components: {
        'app-dealers-shoe': DealersShoe,
        'app-players-hand': PlayersHand
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
        addSuitToHand() {
            const suit = this.formatInput(this.suitToBeAddedToHand);

            const index = this.dealersShoe.indexOf(suit);

            if (index > -1) {
                this.playersHand.push(this.formatInput(suit));
                this.removeSuit(this.suitToBeAddedToHand);     
            }
        }
    },
}
</script>

<style scoped>
    .config-area,
    .container
     {
        display: flex;
    }

    .config-area div {
        display: flex;
        flex-direction: column;
    }
</style>