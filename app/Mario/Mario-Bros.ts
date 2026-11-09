class Mario {
    hp: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: "mario" | "super mario" | "fire mario";

    constructor(hp: number = 1, speed: number = 5, currentForm: "mario" | "super mario" | "fire mario" = "mario") {
        this.hp = hp;
        this.speed = speed;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = currentForm;
    }

    moveRight(): void {
        this.positionX += this.speed;
        console.log(`${this.currentForm} bergerak ke kanan. positionX sekarang: ${this.positionX}`);
    }

    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`${this.currentForm} bergerak ke kiri. positionX sekarang: ${this.positionX}`);
    }

    getSuperMushroom(): void {
        this.currentForm = "super mario";
        this.hp += 1;
        console.log(`Mario menjadi ${this.currentForm}. hp sekarang: ${this.hp}`);
    }

    getFireFlower(): void {
        this.currentForm = "fire mario";
        this.hp += 1;
        console.log(`Mario menjadi ${this.currentForm}. hp sekarang: ${this.hp}`);
    }

    getSuperStar(): void {
        this.invincible = true;
        console.log("Mario kebal terhadap serangan!");
    }

    attacked(): void {
        if (this.invincible) {
            console.log("Mario kebal, serangan tidak berpengaruh!");
            return;
        }
        this.hp -= 1;
        this.currentForm = "mario";
        console.log(`Mario diserang. hp sekarang: ${this.hp}, form: ${this.currentForm}`);
    }

    shoot(): void {
        console.log("Mario tidak bisa menembak");
    }
}

class SuperMario extends Mario {
    constructor() {
        super(2, 5, "super mario");
    }

    shoot(): void {
        console.log("Super Mario tidak bisa menembakkan bola api");
    }
}

class FireMario extends Mario {
    constructor() {
        super(2, 5, "fire mario");
    }

    shoot(): void {
        console.log("Fire Mario menembakkan bola api!");
    }
}

const mario = new Mario();
const superMario = new SuperMario();
const fireMario = new FireMario();

mario.moveRight();
mario.moveLeft();
mario.getSuperMushroom();
mario.getFireFlower();
mario.getSuperStar();
mario.attacked();

const semuaMario: Mario[] = [mario, superMario, fireMario];
semuaMario.forEach((m) => m.shoot());