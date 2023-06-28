    
   function calculaValores() {

   
    let valor1 = parseFloat( document.getElementById('n1').value)
    let valor2 = parseFloat( document.getElementById('n2').value)
    let operador = document.getElementById('operador').value
    
    let resultadoOperacao


   
      switch (operador){
        case '+' : resultadoOperacao =  valor1 + valor2;
        break;

        case '-' : resultadoOperacao =  valor1 - valor2;
        break;

        case '*' : resultadoOperacao =  valor1 * valor2;
        break;

        case '/' :resultadoOperacao =  valor1 / valor2;
        break;
        
      

    }



   document.getElementById('resultado').innerHTML = resultadoOperacao

    
  }
  
  
  