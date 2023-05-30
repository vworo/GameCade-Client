<script>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/chat">Chat</RouterLink>
    </nav>
</template>

<style scoped>
    a {
        margin: 2em;
    }
</style>