const elementos = document.querySelectorAll('.movimento')

const obisevar = new IntersectionObserver((entrada) => {
    entrada.forEach( (visor) => {
        if(visor.isIntersecting){
            visor.target.classList.add('visivel')
        } else{
            visor.target.classList.remove('visivel')
        }
    })
})

elementos.forEach( (elemento) => obisevar.observe(elemento))


const elementosRV = document.querySelectorAll('.movimentoRV')

const obisevarRV = new IntersectionObserver((entradaRV) => {
    entrada.forEach( (visorRV) => {
        if(visorRV.isIntersecting){
            visorRV.target.classList.add('visivelRV')
        } else{
            visorRV.target.classList.remove('visivelRV')
        }
    })
})

elementosRV.forEach( (elemento) => obisevarRV.observe(elemento))

//magia no mouser

const magia = document.getElementById('magia');
const ctx = magia.getContext('2d');
magia.width = window.innerWidth;
magia.height = window.innerHeight;
let spots= [];
let hue = 0;