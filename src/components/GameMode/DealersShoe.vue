<template>
    <div class="container">
        <h5>DealersShoe</h5>
        <div v-if="dealersShoe.length">
            <div v-if="cardsSuit.ace.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.ace.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.ace"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.ace.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.two.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.two.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.two"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.two.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.three.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.three.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.three"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.three.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.four.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.four.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.four"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.four.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.five.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.five.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.five"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.five.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.six.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.six.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.six"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.six.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.seven.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.seven.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.seven"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.seven.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.eight.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.eight.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.eight"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.eight.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.nine.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.nine.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.nine"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1" 
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.nine.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.ten.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.ten.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.ten"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.ten.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.jack.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.jack.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.jack"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.jack.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.queen.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.queen.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.queen"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1" 
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.queen.length) }}</span>
                </div>
            </div>
            <div v-if="cardsSuit.king.length">
                <div class="card-probability">
                    {{ suitProb(cardsSuit.king.length) }}
                </div>
                <div class="card-container">
                    <app-card 
                        v-for="(card, index) in cardsSuit.king"
                        :key="index"
                        class="app-card" 
                        :card="card" 
                        :index="index + 1"
                    />
                    <span class="extra-cards-counter">{{ extraCards(cardsSuit.king.length) }}</span>
                </div>
            </div>
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
                king: []
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
        }
    },
    watch: {
        dealersShoeLength() {
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
                king: []        
            }

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
                        break;
                    case 'Jack':
                        this.cardsSuit.jack.push(card);
                        break;
                    case 'Queen':
                        this.cardsSuit.queen.push(card);
                        break;
                    case 'King':
                        this.cardsSuit.king.push(card);
                }
            })
        },
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .card-container {
        display: flex;
        width: 115px;
    }

    .app-card:nth-child(2),
    .app-card:nth-child(3),
    .app-card:nth-child(4),
    .extra-cards-counter {
        position: relative;
    }

    .app-card:nth-child(2) {
        right: 40px;
    }

    .app-card:nth-child(3) {
        right: 80px;
    }

    .app-card:nth-child(4),
    .extra-cards-counter {
        right: 120px;
    }

    span {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
</style>