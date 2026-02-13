
//write your code here
let pronoun = ['the', 'our', 'her', 'his', 'your'];
let adj = ['great', 'big', 'small', 'brave', 'kind'];
let noun = ['jogger', 'racoon', 'table', 'hair', 'dog'];
let extenxions = ['.com', '.org', '.net', '.es', '.io'];

const divElement = document.getElementById("web");
const generateDominios = () => {
    divElement.innerHTML = '';  
    
    for(let elementA of pronoun){
        for(let elementB of adj){
            for(let elementC of noun){
                for(let elementD of extenxions){
                    const web = elementA + elementB + elementC + elementD;
                    const newDiv = document.createElement("div");  
                    newDiv.innerHTML = web;  
                    newDiv.style.padding = "2px";
                    divElement.appendChild(newDiv);
                }
            }
        }
    }
};

generateDominios();  
