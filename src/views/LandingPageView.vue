<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="landingContent">
            <h1>Welcome to GameCade</h1>
            <RouterLink to="/home" v-slot="{ navigate }">
                <button>
                    Play Game
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    background-color: #eec6ff;
    display: flex;
    text-align: center;
    border: 5px solid black;
}

.landingContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
}

.landingContent h1 {
    font-family: 'Fredoka', sans-serif;
    font-weight: 800;
}

button {
    margin: 1em;
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: 16px;
    background-color: #8d54db;
    border: 4px solid black;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-family: 'Fredoka', sans-serif;
    font-weight: 800;
    transition: 0.17s;
  
  cursor: pointer;
}

button:hover {
    background-color: #e13fe7;
    border: 4px solid rgba(0, 0, 0, 0.3);
}

button:active {
    background-color: #6a3daa;
    border: 4px solid rgba(0, 0, 0, 0.8);
    color: #ccc;
}

</style>
