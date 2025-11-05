
// function adicionar(){

//     let valor = document.getElementById("resultado")
//     valor.value += "+"
// }
//#################################################################

function insert (num){
var numero = document.getElementById('resultado')
numero.value += num

}

function clean(){
 
     var limpar = document.getElementById('resultado')
     limpar.value = ""
}

function adicionar (){

    let soma = document.getElementById('resultado')
    soma.value += "+"

}

function subtrair (){

    let sub = document.getElementById('resultado')
    sub.value += "-"
}

function multiplicar  (){

    let mult = document.getElementById('resultado')
    mult.value += "*"
}

function dividir (){

    let div = document.getElementById('resultado')
    div.value += "/"
}

function potencia (){

    let pot = document.getElementById('resultado')
    pot.value += "**"
}


function calcular(){
 
         var resultado = document.getElementById('resultado').value
         if(resultado){
     
            try{
        resultado = eval(resultado)
        document.getElementById('resultado').value= resultado
            }catch(erro){

                document.getElementById('resultado').value = "Erro"
            }
      }

    
  } 









//###################################################################

// document.getElementById('resultado').innerHTML = numero + num
 
 
 
//  function clean(){
 
//      document.getElementById('resultado').innerHTML= ""
//  }
 
//  function back(){
 
//      var resultado = document.getElementById('resultado').innerHTML;
//      document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
//  }
 
//  function calcular(){
 
//      var resultado = document.getElementById('resultado').innerHTML
//      if(resultado){
 
//          document.getElementById('resultado').innerHTML = eval(resultado)
//      }
 
//  }
