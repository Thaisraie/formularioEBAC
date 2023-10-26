function validaCampo() {
    
    const valorA = document.getElementById('a').value
    const valorB = document.getElementById('b').value

    if(valorB > valorA) {
        document.getElementById('res').innerHTML = 'Válido' 
        document.getElementById('v').style.backgroundColor = '#a3d298'
    }
    else {
        document.getElementById('res').innerHTML = `Inválido` 
        document.getElementById('v').style.backgroundColor = '#e09f9f' 
    }
}

