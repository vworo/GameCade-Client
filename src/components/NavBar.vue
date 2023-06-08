<script>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/chat">Chat</RouterLink>

        <div class="login">
            <button>
                LOGIN
            </button>
        </div>
    </nav>
</template>

<style scoped>
    a {
        margin: 2em;
    }
    
    .login {
        display: inline-block;
    }

    .login button {
        cursor: pointer;
        
    }
</style>