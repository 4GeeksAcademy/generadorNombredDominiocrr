// Domain Name Generator
// This app generates all possible domain name combinations using nested loops

// Data arrays - using const because these values never change
const pronouns = ['the', 'our', 'her', 'his', 'your'];
const adjectives = ['great', 'big', 'small', 'brave', 'kind'];
const nouns = ['jogger', 'racoon', 'table', 'hair', 'dog'];
const extensions = ['.com', '.org', '.net', '.es', '.io'];

// Get the container where domains will be displayed
const domainContainer = document.getElementById("web");

/**
 * Generates all possible domain combinations and displays them
 * Uses 4 nested loops to create: pronoun + adjective + noun + extension
 * Total combinations: 5 × 5 × 5 × 5 = 625 domains
 */
const generateDomains = () => {
    // Clear previous content
    domainContainer.innerHTML = '';  
    
    // Nested loops to generate all combinations
    for(let pronoun of pronouns){
        for(let adjective of adjectives){
            for(let noun of nouns){
                for(let extension of extensions){
                    // Create domain using template literals (modern approach)
                    const domain = `${pronoun}${adjective}${noun}${extension}`;
                    
                    // Create DOM element for this domain
                    const domainElement = document.createElement("div");  
                    domainElement.className = "domain-item";
                    
                    // Use textContent instead of innerHTML (safer and faster)
                    domainElement.textContent = domain;  
                    
                    // Add to container
                    domainContainer.appendChild(domainElement);
                }
            }
        }
    }
};

// Generate domains when page loads
generateDomains();
