Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
      addlink: 'https://brunosvieira88.github.io/CasteloBruxo/',
      aprovado: "Passou",
      reprovado:'Reprovado',
      comHTML:"<h2>COM HTML!!!</h2>",
      contador: 0,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    metodoSaida(){
      let aleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      return aleatorio >= 6 ? this.aprovado : this.reprovado;
    }
  },
}).mount('#app');

Vue.createApp({
  data() {
    return {
      contador: 0,
      name: '',
    };
  }, methods:{
      add(){
        this.contador++;
      },
      remove(){
        this.contador === 0 ? this.contador =0 :this.contador--;
       
      },
      inputName(event, sobrenome){
          this.name = event.target.value + sobrenome;
  
      }
  } 
}).mount('#contador');

Vue.createApp({
  data() {
    return {
     
    };
  },
   methods:{

    enviarFormulario(){

      alert("impedir evento!");
    }
    
  } 
}).mount('#formulario');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);