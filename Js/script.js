const {createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            check: false
        }
    }
})

app.mount('#app')