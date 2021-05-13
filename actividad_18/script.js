const app = Vue.createApp({
    data() {
        return {
            usuarios: [],
        }
    },
    methods: {
        obtenerUsuarios() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {
                    this.usuarios = users
                })
        }
    },
    created() {
        this.obtenerUsuarios()
    },
})

const vm = app.mount("#app")