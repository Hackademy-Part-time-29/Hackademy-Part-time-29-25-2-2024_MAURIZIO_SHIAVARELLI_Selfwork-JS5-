

//esercizio 1

// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'

// let numero = parseInt(prompt(`inserisci numero`))

// function numeri ( numeroInserito ){

//     for(let i = 1 ; i <= numero ; i++){
        
//         if(i % 3 == 0 ){
//             console.log(`fizz multipli di 3`)
//         }else if(i % 5 == 0 ){
//             console.log(`buzz multipli di 5`)
//         }else if(i % 15 == 0 && i % 5 == 0  ){
//             console.log(`fizzbuzz multipli di 15`)
//         }else if(console.log(i));
//     }
// }

// numeri (numero) ;

























// esercizio numero 2

// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempio:

// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande




// function lunghezza (){

//     let numero = prompt(`inserisci numero`)

//     if(numero.length > 1 && numero.length < 4){
//     console.log(`il numero é composto da ${numero.length} cifre`);
//     }else if(numero.length == 1){
//         console.log(`il numero é composto da ${numero.length} cifra`);
//     }else if(numero.length > 5){
//         console.log(`il numero é troppo grande`)
//     }

// };

// lunghezza();
// lunghezza();

























// esercizio 3



// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  

// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
// TIPS:

// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);

// let giocatore1 = prompt(`inserisci nome giocatore 1`);

// let giocatore2 = prompt(`inserisci nome giocatore 2`);

// let numeroTiri = parseInt(prompt(`numero di tiri`));


// function giocoDadi (){

    

//     let punteggioGiocatore1 = 0
//     let punteggioGiocatore2 = 0


//     for(let i = 1 ; i <= numeroTiri ; i++ ){

//           punteggioGiocatore1 = punteggioGiocatore1 + Math.floor(Math.random() * (6 - 1) + 1) ;
//           console.log(`punteggio di ${giocatore1} al tiro numero ${i} = ${punteggioGiocatore1}`);
          
//           punteggioGiocatore2 = punteggioGiocatore2 + Math.floor(Math.random() * (6 - 1) + 1) ;
//           console.log(`punteggio di ${giocatore2} al tiro numero ${i} = ${punteggioGiocatore2}`);
//     };

//     if (punteggioGiocatore1 > punteggioGiocatore2 ){

//         console.log(`ha vinto ${giocatore1}`)
//     }else if (punteggioGiocatore1 < punteggioGiocatore2){

//         console.log(`ha vinto il ${giocatore2}`)
//     }else if( punteggioGiocatore1 == punteggioGiocatore2){

//         console.log(`pareggio`)
//     }
    

// }   

// giocoDadi()





let giocatore1 = prompt(`inserisci nome giocatore 1`);

let giocatore2 = prompt(`inserisci nome giocatore 2`);

let numeroTiri = parseInt(prompt(`numero di tiri`));


function giocoDadi (){

    

    let punteggioGiocatore1 = 0
    let punteggioGiocatore2 = 0

    for(let i = 1 ; i <= numeroTiri ; i++ ){

        let numeroCasuale1 = (Math.floor(Math.random() * (6 - 1) + 1));
        
        console.log(`rislutato lancio = ${numeroCasuale1} di ${giocatore1}`);
          punteggioGiocatore1 = punteggioGiocatore1 + numeroCasuale1 ;
          console.log(`punteggio di ${giocatore1} al tiro numero ${i} = ${punteggioGiocatore1}`);
          
        
      let numeroCasuale2 = (Math.floor(Math.random() * (6 - 1) + 1));

        console.log(`risultato lancio =${numeroCasuale2} di ${giocatore2}`);
          punteggioGiocatore2 = punteggioGiocatore2 + numeroCasuale2 ;
          console.log(`punteggio di ${giocatore2} al tiro numero ${i} = ${punteggioGiocatore2}`);
    };

    if (punteggioGiocatore1 > punteggioGiocatore2 ){

        console.log(`ha vinto ${giocatore1}`)
    }else if (punteggioGiocatore1 < punteggioGiocatore2){

        console.log(`ha vinto il ${giocatore2}`)
    }else if( punteggioGiocatore1 == punteggioGiocatore2){

        console.log(`pareggio`)
    }
    

}   

giocoDadi()


