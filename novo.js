Vue.createApp({
  data() {
    return {
      name:'',
      nameInput : '',
      cont:0,
    };
  },
  methods: {
    eInput(){
      this.nameInput = this.name;
    },
    inputName(event){

      this.name = event.target.value ;
      console.log(this.name);
    },
    resetName(){
      this.nameInput = '';
    },
    add(){
      this.cont++;
    },
    remove(){
      console.log("entrou");
       this.cont === 0 ? this.cont = 0 : this.cont-- ;
    },
  },
  computed:{

    removett(){
       return this.cont === 0 ? 'Contador em 0 ' : 'Contador maior que 0' ;
    },
  },
}).mount('#app');

