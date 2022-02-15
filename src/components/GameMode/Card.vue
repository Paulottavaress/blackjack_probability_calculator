<template>
    <div v-if="index <= 4 || !index" class="card flex-row dark-color">
        <div class="top">{{ card }}</div>
        <div class="bottom flex-row justify-end align-end">{{ card }}</div>
    </div>
</template>

<script>
export default {
    props: ['card', 'index'],
}
</script>

<style scoped>
    .card {
        height: 100px;
        min-width: 50px;
        border: 1px black solid;
        border-radius: 5px;
        background: white;
    }

    .top,
    .bottom {
        width: 50%;
        height: 100%;
    }
</style>