const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
    return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
    return 'Чик-чирик';
    }
}

let isDomestic = prompt("Введите значение для переменной isDomestic:");

const kdog = makeDomestic.bind(dog)

function makeDomestic(isDomestic) {
    return {
        ...this,
        isDomestic: isDomestic
    };
}

const domesticBird = kdog(isDomestic);

console.log(`${domesticBird.type} по имени ${domesticBird.name} говорит ${domesticBird.makeSound()}.`);

console.log(domesticBird);