function go(){ 

var usuario=document.form.email.value; 
var password=document.form.text.value; 
if (usuario=="marcelo" && password=="12345") { 
// window.location="TU_PAGINA_WEB.HTML";
console.log("correcto"); 
} 
if (usuario=="marcelo@futura.com" && password=="12345") { 
window.location="https://www.facebook.com"; 
// console.log("correcto");
} 
if (usuario=="kdkdk" && password=="fkdk") { 
//window.location="errorpopup.html"; 
console.log("correcto");
} else{
    alert("Verificar: Correo electrónico o contraseña incorrectos");
}
} 
