const { createApp } = Vue

createApp({
    data() {
        return {
        
            parola: "",

        }
    },
    mounted() {
        let random;

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

            console.log(result)

            this.parola = result.data.response

        });
    }
}).mount('#app')