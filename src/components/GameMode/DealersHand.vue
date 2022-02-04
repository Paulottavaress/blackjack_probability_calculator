<template>
    <div class="flex-column text-center align-center absolute zero-top center-left">
        <div>
            Dealer's opening card: {{ dealersHand[0] }}
        </div>
        <div class="flex-row">
            <app-card
                v-for="(card, index) in dealersHand"
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
    props: ['dealersHand'],
    components: {
        'app-card': Card,
    },
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