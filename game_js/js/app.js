const door = document.querySelector(".door");
const cont = document.querySelector(".container");
const creep_hp = document.getElementById("creepHp");
const creep_name = document.getElementById("creep_name");
const creep_race = document.querySelector(".race");
const creep_weapon = document.querySelector(".weapon");
const attackBtn =  document.querySelector(".hero_attack");
const leave_enemy = document.querySelector(".leave");
const statistics = document.querySelector(".statics");
const arthas_btn = document.querySelector(".arthas");
const trall_btn = document.querySelector(".trall");
const changeHero = document.querySelector(".changeHero");

let yourHero = ''
let monster = ''

function changeTrall(){ //Функция описывающая выбор героя, да, их нужно объединить с нижней.
    yourHero = trall
    changeHero.style.display = "none";
    door.style.display = "block";
    return yourHero
}
function changeArthas(){
    yourHero = arthas
    changeHero.style.display = "none";
    door.style.display = "block";
    return yourHero
}
function changeMonster() { // Функция рандомной генерации монстра
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
    let randMonster = randomInteger(1, 2)
    if(randMonster === 1){
        monster = furion
        return monster
    } else {
        monster = ogre
        return monster
    }
}

function  goDungeon() {
    door.style.display = "none";
    document.querySelector(".dung").style.display = "flex"
};
function leaveDungeon(){
    changeMonster()
    changeHero.style.display = "flex";
    attackBtn.style.display = "block"
    document.querySelector(".dung").style.display = "none"
    monster.health = 100
    creep_hp.value = 100
    creep_name.textContent = `Монстр: ${monster.name}`
    creep_race.textContent = `Раса: ${monster.race}`
    creep_weapon.textContent =  `Оружие: ${monster.weapon}`
    leave_enemy.textContent = "Убежать!"
    
}
door.addEventListener("click", goDungeon)

class monsterCreate { //Класс конструктор для монстра, Сейчас в Тайпскрипте я переношу такую игру и там уже типизировал через Интерфейс
    constructor(options){
        this.name = options.name
        this.race = options.race;
        this.health = options.health;
        this.weapon = options.weapon;
    }
    getDamage(heroDamage){ //Метод класса для получения урона монстром
        this.health -= heroDamage.damage
        creep_hp.value = this.health
    if(this.health <= 0)  {
        attackBtn.style.display = "none"
        creep_name.textContent = `${monster.name} Повержен!`
        leave_enemy.textContent = "Выйти из Подземелья!"
    }
    }
}
class heroCreate { //Класс для создания Героя
    constructor(options){
        this.name = options.name
        this.damage = options.damage;
    }
}
const arthas = new heroCreate({
    name: "Arthas",
    damage: 25,
});

const trall = new heroCreate({
    name: "trall",
    damage: 35,
})

const ogre = new monsterCreate({
    name: "Огр Маг",
    race: "Огр",
    health: 100,
    weapon: "Дубина"
});
const furion = new monsterCreate({
    name: "Фурион",
    race:  "Эльф",
    health: 100,
    weapon: "Посох"
})
changeMonster()
creep_hp.value = monster.health
creep_name.textContent = `Монстр: ${monster.name}`
creep_race.textContent = `Раса: ${monster.race}`
creep_weapon.textContent =  `Оружие: ${monster.weapon}`

//Игра сделана до обучения Typescript для понимания работы классов и конструкторов