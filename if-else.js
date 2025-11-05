// let idade  = 30

// if(num >= 11 ){
// document.write("Correto"+ "<br>") 
// document.write("Acrescimo:" + num+2 + "<br> <br> <br> <br>")


// }

// document.write("Fim.")
// IF



// IF ELSE

// if(idade<12){
//     document.write("crianca")
// }
// else if(idade<18){
//     document.write("adolescente")

// }
// else if(idade<60){
//     document.write("adulto")
// }
// else{
//     document.write("idoso")
// }


// ####################################################################
// EXERCICIOS

//  let idade = 17

//  if(idade>= 18){
//      document.write("MAIOR DE IDADE")
// } else {

//      document.write("MENOR DE IDADE")

// ######################################################################

// function calcular(){
     
//      let vel = document.getElementById('txtvel1')
//      let res = document.querySelector('div#res') 
//      let vel1 = Number(txtvel1.value)
//      res.innerHTML = "Sua velocidade atual e " + vel1 + "Km/h"
//      if(vel1 > 60){

//           res.innerHTML += "<p>Voce está  <strong>mlutado</strong> por excesso de velocidade</p>."

//      }
//      res.innerHTML += "<p>Diriga sempre com segurança!</p>"
     

// }


function verificarNacionalidade(){

     let pais = document.getElementById('txt')      
     let res = document.getElementById('res')



     if(pais == 'Brasil'){
          res.innerHTML = "<p>Brasileiro<p/>"
      } else{ 
           res.innerHTML = "<p>Estrangeiro</p>"
    }
 }


// let idade = 18

// if(idade < 16){

//      document.write("Não vota")

// }else if(idade < 18){
//      document.write("Voto opcional")

// }else{
//      document.write("Voto obrigatório")

// }

// let agora = new Date()
// let hora = agora.getHours()

// document.write("agora sao exatamente " + hora+ "H"+ "<br>")
// if(hora  <= 11){
//      document.write("Bom dia!")
// }else if(hora <=17){
//      document.write("Boa tarde!")
// }else {
//      document.write("Boa noite!")

// }



    
// let agora = new Date()
// let dia = agora.getDay()

// document.write(dia)