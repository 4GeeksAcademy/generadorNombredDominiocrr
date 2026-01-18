
//write your code here
let pronoun = ['the', 'our', 'her', 'his', 'your'];
let adj = ['great', 'big', 'small', 'brave', 'kind'];
let noun = ['jogger', 'racoon', 'table', 'hair', 'dog'];

for (let iPronoun = 0; iPronoun < pronoun.length; iPronoun++) {
    console.log(pronoun[iPronoun]);
    
    for (let iAdj = 0; iAdj < adj.length; iAdj++) {
        console.log(adj[iAdj]);
        
        for (let iNoun = 0; iNoun < noun.length; iNoun++) {
            console.log(pronoun[iPronoun] + adj[iAdj] + noun[iNoun] + ".com");
        }
    }
}

