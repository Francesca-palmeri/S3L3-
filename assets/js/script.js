const btnprintAdd = document.getElementById('printAdd'); // creata la variabile per selezionare l'elemento button in html
const inputBox = document.getElementById('typeBox'); //creata la variabile per selezionare l'elemento di input in html
const list = document.getElementById('myList'); //creata la variabile per selezionare l'elemento ul in html 


btnprintAdd.addEventListener('click', newElements); //Il gestore di eventi che esegue la funzione al click del button

function newElements(){ 
    if( inputBox.value === '' ){ //la condizione per la quale se l'inputBox non riceve nessun input  
        alert('Scrivi qualcosa!')//eseguirà l'allert
    } else {  //altrimenti
        let li = document.createElement('li'); //creata la variabile per contenere gli elementi li 
        li.innerHTML = inputBox.value; //viene stampato il valore(value) di inputBox all'interno del li appena creato
        list.appendChild(li); //appeso il li appena creato con il valore stampato all'interno di ul
        inputBox.value = ''; //svuota l'input
      }
}
