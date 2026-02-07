import "./style.css";

// Constantes para generar dominios
const PRONOUNS = ['the', 'our', 'her', 'his', 'your'];
const ADJECTIVES = ['great', 'big', 'small', 'brave', 'kind'];
const NOUNS = ['jogger', 'racoon', 'table', 'hair', 'dog'];
const EXTENSIONS = ['.com', '.net', '.us', '.io'];

/**
 * Genera todas las combinaciones posibles de dominios
 * @returns {Array<string>} Array con todos los dominios generados
 */
function generateDomains() {
    const domains = [];
    
    // Usar for...of es más moderno y legible
    for (let pronoun of PRONOUNS) {
        for (let adjective of ADJECTIVES) {
            for (let noun of NOUNS) {
                for (let extension of EXTENSIONS) {
                    // Template literals son mejores que concatenación
                    const domain = `${pronoun}${adjective}${noun}${extension}`;
                    domains.push(domain);
                }
            }
        }
    }
    
    return domains;
}

/**
 * Muestra los dominios en el DOM
 */
function displayDomains() {
    const domains = generateDomains();
    
    // Crear HTML para cada dominio
    const domainsHTML = domains.map(domain => 
        `<div class="domain-item">${domain}</div>`
    ).join('');
    
    const container = document.querySelector('.container-fluid');
    container.innerHTML = `
        <h1 class="mt-5">🌐 Domain Name Generator</h1>
        <p class="lead">Generated <strong>${domains.length}</strong> domain combinations</p>
        <div class="domain-list mt-4">
            ${domainsHTML}
        </div>
        <div class="fixed-bottom p-4">
            Made with ❤️ by <a href="https://www.4geeksacademy.com">4Geeks Academy</a>
        </div>
    `;
}

// Ejecutar cuando carga la página
window.addEventListener('load', displayDomains);

