const form =document.getElementById('form');
var nome=document.getElementById('nome');
var sobrenome =document.getElementById('sobrenome');
var email =document.getElementById('email');
var error = document.querySelector('.error');
form.adEdventListener(submit,()=>{

    e.preventDefault()
    checkInputs()
}
)
function checkInputs()
{
    const nomeValue =nomeValue.trim()
    const sobrenomeValue =sobrenomeValue.trim()
    const emailValue =emailValue.trim()
    if(emailValue ===''){
        errorValidation(nome, 'preencha esse campo')
    }else{
        success.Validation(nome)
    }
    if(sobrenomeValue==='') {
    errorValidation(sobrenome, 'preencha esse campo')

    } else{
success.Validation(sobrenome)
    }
   /* email.addEventListener("input", function (event) {
        // Chaque fois que l'utilisateur saisit quelque chose
        // on vérifie la validité du champ e-mail.
        if (email.validity.valid) {
          // S'il y a un message d'erreur affiché et que le champ
          // est valide, on retire l'erreur
          error.innerHTML = ""; // On réinitialise le contenu
          error.className = "error"; // On réinitialise l'état visuel du message
        }
      }, false);
      form.addEventListener("submit", function (event) {
        // Chaque fois que l'utilisateur tente d'envoyer les données
        // on vérifie que le champ email est valide.
        if (!email.validity.valid) {
      
          // S'il est invalide, on affiche un message d'erreur personnalisé
          error.innerHTML = "J'attends une adresse e-mail correcte, mon cher&nbsp;!";
          error.className = "error active";
          // Et on empêche l'envoi des données du formulaire
          event.preventDefault();
        }
      }, false);*/
    if(emailValue ===''){
        errorValidation(email, 'preencha esse campo')
    }else{
        success.Validation(email)
    }
    
}
function errorValidation(input, message){
    const formControl = input.preventElement;
    const small =formControl.querySelector('small')
    small.innerText= message
    formControl.classNome= 'form-control error'
}



