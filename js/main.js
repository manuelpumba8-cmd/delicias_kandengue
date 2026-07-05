function verificar(){
email=document.querySelector("#email").value;
senha=document.querySelector("#senha").value;
x='true'
if(email===""){
window.alert("Por favor insira seu E-Mail")
x='false'
}if(senha==="" && x==='true'){
window.alert("Por favor insira sua senha")
x='false'
}else if(x==='true'){
    window.alert("Obrigado!")
    location.href="index.html"
}
}

function verifica(){
nome=document.querySelector("#name").value;
sobrenome=document.querySelector("#sobrenome").value;    
email=document.querySelector("#email").value;
senha=document.querySelector("#senha").value;
x='true'
if(nome===""){
window.alert("Por favor insira seu nome")
x='false'
}if(sobrenome==="" && x==='true'){
window.alert("Por favor insira seu sobrenome")
x='false'
}if(email==="" && x==='true'){
window.alert("Por favor insira seu E-Mail")
x='false'
}if(senha==="" && x==='true'){
window.alert("Por favor insira sua senha")
x='false'
}else if(x==='true'){
    window.alert("Obrigado! "+nome+" "+sobrenome)
    location.href="index.html"
}
}