function validaCampo() {
    
    const valorA = parseInt(document.getElementById('a').value)
    const valorB = parseInt(document.getElementById('b').value)
    
    if(valorB > valorA) {
        document.getElementById('res').innerHTML = 'Válido' 
        document.getElementById('v').style.backgroundColor = '#a3d298'
    }
    if(valorB < valorA) {
        document.getElementById('res').innerHTML = `Inválido` 
        document.getElementById('v').style.backgroundColor = '#e09f9f' 
    }
    if(!valorB || !valorA) {
        document.getElementById('res').innerHTML = 'Insira um número'
        document.getElementById('v').style.backgroundColor = 'white'
        document.getElementById('v').style.width = '32%'
    }   
}

