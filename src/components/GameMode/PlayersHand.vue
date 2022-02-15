<template>
    <div class="flex-column text-center">
        <div>
            Sum of your cards: {{ handSum }} ({{ playerHandStatus }})
        </div>
        <div class="flex-row justify-center">
            <app-card
                v-for="(card, index) in playersHand"
                :key="index"
                class="app-card"
                :card="card">
            </app-card>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    props: ['playersHand'],
    data() {
        return {
            playersHandSum: 0,
            playersHandValue: [],
            aceCounter: 0
        }
    },
    components: {
        'app-card': Card,
    },
    computed: {
        handSum() {
            this.resetStatus();
            this.setPlayersHandValue();

            this.playersHandValue.forEach(card => {
                this.playersHandSum += card;
            });

            this.setAceValue(); 

            return this.playersHandSum;
        },
        playerHandStatus() {
            const isSoft = this.playersHandValue.some((value) => {
                return value === 11;
            })

            if (isSoft) {
                return 'soft';
            } else {
                return 'hard';
            }
        }
    },
    methods: {
        resetStatus() {
            this.playersHandSum = 0;
            this.playersHandValue = [];
            this.aceCounter = 0;
        },
        setPlayersHandValue() {
            this.playersHand.forEach((card) => {
                if (card === 'Jack' || card === 'Queen' || card === 'King') {
                    this.playersHandValue.push(10);
                } else if(card === 'Ace') {
                    this.aceCounter++;
                } else {
                    this.playersHandValue.push(Number(card));
                }
            })
        },
        setAceValue() {
            for (let i = 0; i < this.aceCounter; i++){
                if ((this.playersHandSum + 11) > 21) {
                    if ((this.playersHandSum + 1) > 21) {
                        const index = this.playersHandValue.indexOf(11);

                        if (index > -1) {
                            this.playersHandSum -= 10;
                            this.playersHandValue.splice(index, 1, 1);
                        }
                    } 
                    this.playersHandSum++;
                    this.playersHandValue.push(1);
                } else {
                    this.playersHandSum += 11;
                    this.playersHandValue.push(11);
                }
            }    
        }
    }
}
</script>

<style scoped>
    .app-card:nth-child(2),
    .app-card:nth-child(3),
    .app-card:nth-child(4),
    .app-card:nth-child(5),
    .app-card:nth-child(6),
    .app-card:nth-child(7),
    .app-card:nth-child(8),
    .app-card:nth-child(9),
    .app-card:nth-child(10),
    .app-card:nth-child(11),
    .extra-cards-counter {
        position: relative;
    }

    .app-card:nth-child(2) {
        right: 40px;
    }

    .app-card:nth-child(3) {
        right: 80px;
    }

    .app-card:nth-child(4) {
        right: 120px;
    }

    .app-card:nth-child(5) {
        right: 160px;
    }

    .app-card:nth-child(6) {
        right: 200px;
    }

    .app-card:nth-child(7) {
        right: 240px;
    }

    .app-card:nth-child(8) {
        right: 280px;
    }

    .app-card:nth-child(9) {
        right: 320px;
    }

    .app-card:nth-child(10) {
        right: 360px;
    }

    .app-card:nth-child(11) {
        right: 400px;
    }
</style>