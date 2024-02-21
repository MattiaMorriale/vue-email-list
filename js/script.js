const { createApp } = Vue

createApp({
    data() {
        return {
        
            mail:[
                
            ],

        }
    },
    mounted() {
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

            console.log(result)

            this.mail.push({response:result.data.response, success:result.data.success})
            });
    
        }
    }
}).mount('#app')