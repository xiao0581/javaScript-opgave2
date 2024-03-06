Vue.createApp({
    data() {
        return {
            num: null,
            num2: null,
            result: null,
            operation: null,
        }   
    },
    methods: {
        add() {
             
            switch (this.operation) {  
                case '+':
                    this.result = this.num + this.num2;
                    break;
                case '-':
                    this.result = this.num - this.num2;
                    break;
                case '*':
                    this.result = this.num * this.num2;
                    break;
                case '/':
                    this.result = this.num / this.num2;
                    break;
            }        
        }
    }

}).mount('#app')