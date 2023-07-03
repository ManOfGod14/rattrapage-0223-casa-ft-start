export function salutation(personne) {
    alert("Bonjour "+ personne);
    document.querySelector('#pModule1').innerHTML = personne;
}

function informations(n, p) {
    alert(n + p);
}

/**
 * objet moduleUser = {first_name: 'John', last_name: 'John'}
 */
export const moduleUser = {
    first_name: 'John', 
    last_name: 'John',
    email: "john@example.com"
}
