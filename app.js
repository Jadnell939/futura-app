function go(){ 

var usuario=document.form.email.value; 
var password=document.form.text.value; 
if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
window.location="TU_PAGINA_WEB.HTML"; 
} 
if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
window.location="TU_PAGINA_WEB.HTML"; 
} 
if (usuario=="kdkdk" && password=="fkdk") { 
window.location="errorpopup.html"; 
} else{
    alert("hello");
}
} 