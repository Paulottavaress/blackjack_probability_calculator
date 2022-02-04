<template>
    <div v-if="index <= 4 || !index" class="card">
        <div class="top">{{ card.length >= 3 ? card : `${card}____` }}</div>
        <div class="bottom">{{ card.length >= 3 ? card : `____${card}` }}</div>
    </div>
</template>

<script>
export default {
    props: ['card', 'index'],
}
</script>

<style scoped>
    .card {
        display: flex;
        height: 100px;
        width: 50px;
        border: 1px black solid;
        border-radius: 5px;
        background: white;
    }

    .top,
    .bottom {
        width: 50%;
        height: 100%;
    }

    .bottom {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>