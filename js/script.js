/*
1. avere un elenco di task da fare o fatti //yes

2. stamparli in pagina //yes

3. al click del task fare il toggle del task fatto o meno //yes

4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore //yes

5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task // yes

6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
BONUS
- Verificare se il task è già presente e nel caso mostrare l’errore
- ... il limite è la fantasia ;-)
*/

const {createApp} = Vue;

createApp({
data(){
return{
tasks:[
    {
      text:'Prendere la pappa ad artù',
      done: false
    },
    {
      text:'Studiare Vue',
      done: true
    },
    {
      text:'Fare il bucato',
      done: false
    }
],

  logo:'img/logo.png',
  line:'line',
  errore:'',
  inner:''
}},
methods:{
lineToggle(index){  

  this.tasks[index].done = !this.tasks[index].done

},

elimina(index){
 if (this.tasks[index].done === true) {
  this.tasks.splice(index,1);
  this.errore='';
 }else{
  this.errore ='Prima di eliminare un elemento della lista devi selezionarlo';
 }
},
addElement(){
  if(this.inner.length <= 5){
    this.errore ='Devi inserire più 5 caratteri'
  }else{
    this.errore=''
     this.tasks.unshift({text:this.inner,done:false})    
  }
},

}

}).mount('#app')