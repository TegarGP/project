class NPC {
    name: string;
    health: number;
    speed: number;
    attack: number;
    defense: number;
    npcType: "walk" | "fly";

    constructor(name: string,health: number,speed: number,attack: number,defense: number, npcType: "walk" | "fly") {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.npcType = npcType;
    }
    walking(): void {
        this.speed += 2;
        console.log(`${this.name} berjalan. speed sekarang: ${this.speed}`);
    }

    sprint(): void {
        this.speed +=4;
        console.log(`${this.name} sedang berlari. speed sekarang: ${this.speed}`);
    }
    attacking(): void {
        this.attack += 2;
        console.log(`${this.name} menyerang. attack sekarang: ${this.attack}`);
    }
    getAttacked(damage: number): void {
        this.attack -= damage;
        console.log(`${this.name} menerima serangan. attack sekarang: ${this.attack}`);
    }
    getBuff(buff: number): void {
        this.health += this.health * 2;
        this.attack += this.attack * 2;
        console.log(`${this.name} menerima buff. attack sekarang: ${this.attack}`);
    }
}
const ricardo = new NPC("Ricardo", 100, 50, 88, 70,"walk");

ricardo.getBuff();    