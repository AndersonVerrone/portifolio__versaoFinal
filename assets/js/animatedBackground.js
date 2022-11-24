const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// posição do mouse

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/150) * (canvas.width/150)
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// criando particulas

class particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // metodo de desenhar particulas individuais
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = 'rgb(159, 115, 171)';
        ctx.fill();
    }
    // verificação de posição de particulas, verificação da posição do mouse
    // mover particular, desenhar particulas
    update() {
        // verificar particulas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        } 
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // verificar colisao - mouse position / particula posição
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size) {
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        // mover particulas
        this.x += this.directionX;
        this.y += this.directionY;
        // desenhar particulas
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) /9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) +1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size *2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size*2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'rgb(159, 115, 171)';

        particlesArray.push(new particle(x, y, directionX, directionY, size, color));
    }
}

// animação loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// verificar se as particulas estão proximas para desenhar a linha entre elas
function connect (){
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x)
            * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y)
            * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width/15) * (canvas.height/15)) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}
init();
animate();