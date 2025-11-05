function Verificar(){

    let ano = document.getElementById('idade')
    let anoactual = 2025
    let res = anoactual - Number(ano.value)
    let resul = document.getElementById('resultado')


    if(res == 0 || ano.value > anoactual){

        alert("Verfique os dados e tente novamente!!")
    }

            else if (res < 6 ){

               
                resul.innerHTML = "A sua idade e, "  +  res  +   " Bebe"
                

            }else if(res < 13){

                resul.innerHTML = "A sua idade e, "  +  res  +   " Crianca"
            
            } else if(res < 18){

                    resul.innerHTML = "A sua idade e, "  +  res  +   " Adolescente"
            }else if(res < 35){


                    resul.innerHTML = "A sua idade e, "  +  res  +   " Jovem"

            }else if(res < 60){


                resul.innerHTML = "A sua idade e, "  +  res  +   " Adulto"

            } else{

                resul.innerHTML = "A sua idade e, "  +  res  +   " Idoso "
            }


        

}