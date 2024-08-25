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

const mouse = {
    x: undefined ,
    y: undefined
}

magia.addEventListener('mousemove', function (event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 3; i++) {
        spots.push(new particle());
    }
});

class particle{
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = math.random() * 2 + 0.1;
        this.speedX = math.random() * 2 - 1;
        this.speedY = math.random() * 2 - 1;
        this.color = 'hsl(' + hue + ', 100% , 50%)';
    }


    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size == 0.03;
    }

    draw() {
        ctx.fillstyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, math.PI * 2);
        ctx.fill();
    }

}

function handleparticle() {
    for (let i = 0; i < spots.length; i++){
        spots[i].update();
        spots[i].draw();
        for (let j = i; j < spots.length; j++){
            const dx = spots[i].x - spots[j].x;
            const dy = spots[i].y - spots[j].y;
            const distance = math.sqrt(dx * dx + dy * dy);
            if (distance < 90){
                ctx.beginpath();
                ctx.strokeStyle = spots[i].color;
                ctx.lineWidth = spots[i].size /10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.LineTo(spots[i].x, spots[i].y);
                ctx.strore();
            }
        }
        if (spots[i].size <=0.3){
            spots.spçice(i, 1); i--;
        }
    }
}

function animate() {
    ctx.clearRect(0 , 0 ,magia.width, magia.height);
    handleparticle();
    hue++;
    requestAnimationFrame(animate);
}

window.addEventListener('resize' , function() {
    magia.width = innerWidth;
    magia.height = innerHeight;
    init();
})

window.addEventListener('mouserout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
})

animate()