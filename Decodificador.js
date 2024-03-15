
let btnEncripta = document.getElementById("btnEncripta");
let btnDesencripta = document.getElementById("btnDesencripta");
let btnCopia = document.getElementById("btnCopia");
let salida = document.getElementById("txtSalida");
let btnCopia2 = document.getElementById("btnCopia2");


let respuesta = "";
const claves = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};

btnEncripta.addEventListener("click",function(){
    let textoEntrada = document.getElementById("txtIngresa").value;
    
    
        for(const clave in claves){
            respuesta = textoEntrada.replaceAll(clave,claves[clave]); //ENCRIPTA
            //respuesta = textoEntrada.replaceAll(claves[clave],clave); //DESENCRIPTA
            textoEntrada=respuesta;
        }salida.value=textoEntrada;

    /*let datos = textoEntrada.split("");
    datos.forEach(letra =>{
        if(letra=="a"){
            respuesta = respuesta+"ai";
        }else{
            respuesta = respuesta+letra;
        }
        if(letra=="e"){
            respuesta = respuesta+"enter";
        }else{
            respuesta = respuesta+letra;
        }
        if(letra=="i"){
            respuesta = respuesta+"imes";
        }else{
            respuesta = respuesta+letra;
        }
        if(letra=="o"){
            respuesta = respuesta+"ober";
        }else{
            respuesta = respuesta+letra;
        }
        if(letra=="u"){
            respuesta = respuesta+"ufat";
        }else{
            respuesta = respuesta+letra;
        }
    });
    //alert("Texto: "+respuesta);
    salida.value = respuesta;
    */
    respuesta = "";
});


btnDesencripta.addEventListener("click",function(){
        let textoEntrada = document.getElementById("txtIngresa"). value;


        for(const clave in claves){
            //respuesta = textoEntrada.replaceAll(clave,claves[clave]); //ENCRIPTA
            respuesta = textoEntrada.replaceAll(claves[clave],clave); //DESENCRIPTA
            textoEntrada=respuesta;
        }salida.value=textoEntrada;

        /*
        if(textoEntrada.includes("ai")){
            respuesta=textoEntrada.replaceAll("ai","a");
            textoEntrada=respuesta;
        }
        if(textoEntrada.includes("enter")){
            respuesta=textoEntrada.replaceAll("enter","e");
            textoEntrada=respuesta;
        }
        if(textoEntrada.includes("i")){
            respuesta=textoEntrada.replaceAll("i","imes");
            textoEntrada=respuesta;
        }
        if(textoEntrada.includes("o")){
            respuesta=textoEntrada.replaceAll("ober","o");
            textoEntrada=respuesta;
        }
        if(textoEntrada.includes("ufat")){
            respuesta=textoEntrada.replaceAll("ufat","u");
            textoEntrada=respuesta;
        }
        salida.value = respuesta;
        */
        respuesta = "";

});


btnCopia.addEventListener("click",function(){
    let textoEntrada =document.getElementById("txtIngresa").value;
    navigator.clipboard.writeText(textoEntrada);
    alert ("Texto Copiado");
});


btnCopia2.addEventListener("click",function(){
    let textoSalida =document.getElementById("txtSalida").value;
    navigator.clipboard.writeText(textoSalida);
    alert ("Texto Copiado");
});
