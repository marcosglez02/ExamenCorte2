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

// Codificación de la función calcular
function calcular(){
    let cambio = document.getElementById('cantidad').value;
    let selector1 = document.getElementById('MonedaOrigen').value;
    let selector2 = document.getElementById('MonedaDestino').value;
    let total = 0;

    if(selector1 == "1"){
        if(selector2 == "2"){
            total = cambio/19.85;
        }else if(selector2 == "3"){
            total = (cambio/19.85) * 1.35;
        }else if(selector2 == "4"){
            total = (cambio/19.85) * 0.99;
        }
    }else if(selector1 == "2"){
        if(selector2 == "1"){
            total = cambio * 19.85;
        }else if(selector2 == "3"){
            total = cambio * 1.35;
        }else if(selector2 == "4"){
            total = cambio * 0.99;
        }
    }else if(selector1 == "3"){
        if(selector2 == "1"){
            total = (cambio/1.35) * 19.85;
        }else if(selector2 == "2"){
            total = (cambio/1.35)
        }else if(selector2 == "4"){
            total = (cambio/1.35) * 0.99;
        }
    }else if(selector1 == "4"){
        if(selector2 == "1"){
            total = (cambio/0.99) * 19.85
        }else if(selector2 == "2"){
            total = cambio/0.99;
        }else if(selector2 == "3"){
            total = (cambio/0.99) * 1.35;
        }
    }
    // Imprimir los resultados
    document.getElementById("subtotal").value = (total).toFixed(2);
	document.getElementById("totComision").value = (total * 0.03).toFixed(2);
	document.getElementById("total").value = (total + (total * 0.03)).toFixed(2);
}