const myArray = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5']; 
// myArray[index]
let contador = 0
let x =(-1)
const valor = document.querySelector('#valor')
const botones = document.querySelectorAll('.boton')
botones.forEach(boton =>{
    boton.addEventListener('click', function(b){
        const estilos = b.currentTarget.classList

        if(estilos.contains('Menos')){
            x=x-1
            contador=myArray[x]
        }
        else if(estilos.contains('Mas')){
            x=x+1
            contador=myArray[x]  
        }
        else{
            contador = 0
            contador=myArray[contador]
        }

         valor.textContent = contador
    })
})