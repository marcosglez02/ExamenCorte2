// Creación de la función change
function change(){
    let selector1 = document.getElementById('MonedaOrigen').value;
    let selector2 = document.getElementById('MonedaDestino');
    let mostrar = '<option value="0" disabled selected>Seleccione una moneda</option>'

    if(selector1 == "0"){
        
    }else if(selector1 == "1"){
        mostrar += '<option value="2">Dolar Americano</option><option value="3">Dolar Canadiense</option><option value="4">Euro</option>';
    }else if(selector1 == "2"){
        mostrar += '<option value="1">Peso Mexicano</option><option value="3">Dolar Canadiense</option><option value="4">Euro</option>';
    }else if(selector1 == "3"){
        mostrar += '<option value="1">Peso Mexicano</option><option value="2">Dolar Americano</option><option value="4">Euro</option>';
    }else if(selector1 == "4"){
        mostrar += '<option value="1">Peso Mexicano</option><option value="2">Dolar Americano</option><option value="3">Dolar Canadiense</option>';
    }else{
        alert('Seleccione una opcion válida')
    }
    
    selector2.innerHTML = mostrar;
}