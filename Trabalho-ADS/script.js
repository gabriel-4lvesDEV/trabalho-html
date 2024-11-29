$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
})

function formatarMoeda(input) {
    
    let valor = input.value.replace(/[^\d]/g, '');
  
    
    if (valor.length > 2) {
      valor = valor.slice(0, valor.length - 2) + ',' + valor.slice(valor.length - 2);
    }
  
   
    if (valor) {
      input.value = 'R$ ' + valor;
    } else {
      input.value = '';
    }
  }

  function formatarMoeda(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2) + '';
    valor = valor.replace(".", ",");
    input.value = valor.replace(/(\d)(\d{3})(\d{3})$/, "$1.$2.$3");
    input.value = valor.replace(/(\d)(\d{3})$/, "$1.$2");
}

   