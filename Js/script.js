const {createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            Image: './img/zoro.jpg'
        }
    }
});

app.mount('#app');