Vue.createApp({
    data() {
      return {
        tarefas: [],
        novaTarefa: ''
      };
    },
    methods: {
      addTarefa() {
        this.tarefas.push(this.novaTarefa);
        this.novaTarefa = '';
      }
    }
  }).mount('#appTarefas');