

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href="https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML="<b>Obrigado por passar o mouse</b>";
    //document.getElementById("mousemove").innerHTML="<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}


/*
function soma(n1,n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }else{
        validar  =  false
    }
    return validar;
}

var idade  = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão", "Brasil"));
*/

//var d = new Date();
//alert(d);

/*
var count;
for(count=0; count<=5; count++){
    console.log(count);
}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta);

//var lista  = ["maçã","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse().toString());
//console.log(lista.join(";"));

/*
var nome = "Guará";
var idade = 21;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
console.log(frase.replace("Japão","Brasil").toUpperCase());
*/