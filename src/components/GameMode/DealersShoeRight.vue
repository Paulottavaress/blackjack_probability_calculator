<template>
    <div v-if="dealersShoe.length" class="flex-column align-end self-align-center">
        <h5>Dealers Shoe Right</h5>
        <div class="cards-group">
            <div v-if="cardsSuit.six.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.six.length) }}
                </div>
                <div class="card-container flex-row" :class="[(extraCards(cardsSuit.six.length) >= 10) ? 'right-24' : (extraCards(cardsSuit.six.length) >= 5) ? 'right-16' : '']">
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.six.length) }}</span>
                    <app-card 
                        v-for="(card, index) in cardsSuit.six"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                </div>
            </div>
            <div v-if="cardsSuit.seven.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.seven.length) }}
                </div>
                <div class="card-container flex-row" :class="[(extraCards(cardsSuit.seven.length) >= 10) ? 'right-24' : (extraCards(cardsSuit.seven.length) >= 5) ? 'right-16' : '']">
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.seven.length) }}</span>
                    <app-card 
                        v-for="(card, index) in cardsSuit.seven"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                </div>
            </div>
            <div v-if="cardsSuit.eight.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.eight.length) }}
                </div>
                <div class="card-container flex-row" :class="[(extraCards(cardsSuit.eight.length) >= 10) ? 'right-24' : (extraCards(cardsSuit.eight.length) >= 5) ? 'right-16' : '']">
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.eight.length) }}</span>
                    <app-card 
                        v-for="(card, index) in cardsSuit.eight"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                </div>
            </div>
            <div v-if="cardsSuit.nine.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.nine.length) }}
                </div>
                <div class="card-container flex-row" :class="[(extraCards(cardsSuit.nine.length) >= 10) ? 'right-24' : (extraCards(cardsSuit.nine.length) >= 5) ? 'right-16' : '']">
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.nine.length) }}</span>
                    <app-card 
                        v-for="(card, index) in cardsSuit.nine"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1" 
                    />
                </div>
            </div>
            <div v-if="cardsSuit.ten.length  || cardsSuit.jack.length || cardsSuit.queen.length || cardsSuit.king.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.ten.length + cardsSuit.jack.length + cardsSuit.queen.length + cardsSuit.king.length) }}
                </div>
                <div class="card-container flex-row" :class="[(extraCards(cardsSuit.ten.length + cardsSuit.jack.length + cardsSuit.queen.length + cardsSuit.king.length) >= 10) ? 'right-24' : (extraCards(cardsSuit.ten.length + cardsSuit.jack.length + cardsSuit.queen.length + cardsSuit.king.length) >= 5) ? 'right-16' : '']">
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.ten.length + cardsSuit.jack.length + cardsSuit.queen.length + cardsSuit.king.length) }}</span>
                    <app-card 
                        v-for="(card, index) in cardsSuit.worthTen"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                </div>
            </div>
            <!--
            <div v-if="cardsSuit.jack.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.jack.length) }}
                </div>
                <div class="card-container flex-row">
                    <app-card 
                        v-for="(card, index) in cardsSuit.jack"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter flex-row align-center">{{ extraCards(cardsSuit.jack.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.queen.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.queen.length) }}
                </div>
                <div class="card-container flex-row">
                    <app-card 
                        v-for="(card, index) in cardsSuit.queen"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1" 
                    />
                    <span class="extra-cards-counter flex-row align-center">{{ extraCards(cardsSuit.queen.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.king.length">
                <div class="text-right probability-label">
                    {{ suitProb(cardsSuit.king.length) }}
                </div>
                <div class="card-container flex-row">
                    <app-card 
                        v-for="(card, index) in cardsSuit.king"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter flex-row align-center">{{ extraCards(cardsSuit.king.length) }}</span>
                </div>
            </div>
            -->
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    data() {
        return {
            cardsSuit: {
                ace: [],
                two: [],
                three: [],
                four: [],
                five: [],
                six: [],
                seven: [],
                eight: [],
                nine: [],
                ten: [],
                jack: [],
                queen: [],
                king: [],
                worthTen: []
            }
        }
    },
    props: ['dealersShoe', 'dealersShoeLength'],
    components: {
        'app-card': Card,
    },
    methods: {
        suitProb(suitAmount) {
            return ((suitAmount / this.dealersShoe.length) * 100).toFixed(2) + '%';
        },
        extraCards(suitAmount) {
            return suitAmount > 4 ? `+${suitAmount - 4}` : null;
        },
        clearCardsSuit() {
            this.cardsSuit = {
                ace: [],
                two: [],
                three: [],
                four: [],
                five: [],
                six: [],
                seven: [],
                eight: [],
                nine: [],
                ten: [],
                jack: [],
                queen: [],
                king: [],
                worthTen: []        
            }
        },
    },
    watch: {
        dealersShoeLength() {
            this.clearCardsSuit();

            this.dealersShoe.forEach((card) => {
                switch(card) {
                    case 'Ace':
                        this.cardsSuit.ace.push(card);
                        break;
                    case '2':
                        this.cardsSuit.two.push(card);
                        break;
                    case '3':
                        this.cardsSuit.three.push(card);
                        break;
                    case '4':
                        this.cardsSuit.four.push(card);
                        break;
                    case '5':
                        this.cardsSuit.five.push(card);
                        break;
                    case '6':
                        this.cardsSuit.six.push(card);
                        break;
                    case '7':
                        this.cardsSuit.seven.push(card);
                        break;
                    case '8':
                        this.cardsSuit.eight.push(card);
                        break;
                    case '9':
                        this.cardsSuit.nine.push(card);
                        break;
                    case '10':
                        this.cardsSuit.ten.push(card);
                        this.cardsSuit.worthTen.push(card);
                        break;
                    case 'Jack':
                        this.cardsSuit.jack.push(card);
                        this.cardsSuit.worthTen.push(card);
                        break;
                    case 'Queen':
                        this.cardsSuit.queen.push(card);
                        this.cardsSuit.worthTen.push(card);
                        break;
                    case 'King':
                        this.cardsSuit.king.push(card);
                        this.cardsSuit.worthTen.push(card);
                }
            })
        },
    },
}
</script>

<style scoped>
    .card-container {
        width: 115px;   
        position: relative;
    }

    .cards-group {
        position: relative;
        right: 85px;
    }

    .probability-label {
        position: relative;
        left: 85px;
    }

    .right-16 {
        right: 16px;
    }

    .right-24 {
        right: 24px;
    }

    .extra-cards-counter,
    .app-card:nth-child(2),
    .app-card:nth-child(3),
    .app-card:nth-child(4) {
        position: relative;
    }

    .extra-cards-counter,
    .app-card:nth-child(2) {
        left: 120px;
        z-index: 3;
    }

    .app-card:nth-child(3) {
        left: 80px;
        z-index: 2;
    }

    .app-card:nth-child(4) {
        left: 40px;
        z-index: 1;
    }

</style>