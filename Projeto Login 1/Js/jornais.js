//definindo login e senha
const USER_DB= "borraacha";
const PASS_DB= "borraacha157";

//criando variaveis de elementos HTML (login e senha)
var user = document.getElementById('login')
var pass = document.getElementById('senha')

//criando variavel de elemento button HTML
var button = document.getElementById('btn_entrar')

//criando evento de clique e valida de login e senha
button.addEventListener("click", function(){

    //IF = SE(validar expressão)

    if(user.value == USER_DB && pass.value == PASS_DB){
        //bloco de codigo
        window.location.href = "../Html/noticia.html";
    }

})


































/*function logar (){
   var email = document.getElementById("email");
   var senha = document.getElementById("senha");

   console.log(email.value+senha.value);

   if(email == "borraacha157@gmail.com" && senha.value == "borraacha157"){
      localStorage.setItem("acesso", true)

      window.location.href = "file:///C:/Users/User/Desktop/Projeto%20Login%201/Html/noticia.html";
   }else{
      alert("Usuário ou senha inválidos");
   }
}
*/

/* document.getElementById("btn").addEventListener("click", function (){
   var option2 = document.getElementById("gridRadios2").checked
   if (option2){
      alert ("jornal papel")
      window.location = "file:///C:/Users/User/Desktop/Projeto%20Login%201/Html/jornal_classico.html";
   } 
   var option1 = document.getElementById("gridRadios1").checked
   if (option1){
      alert ("jornal web")
      window.location = "file:///C:/Users/User/Desktop/Projeto%20Login%201/Html/jornal_online.html";
   } 
})
*/