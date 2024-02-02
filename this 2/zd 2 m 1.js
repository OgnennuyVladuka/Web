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

const domesticDog = kdog(isDomestic);

console.log(`${domesticDog.type} по имени ${domesticDog.name} говорит ${domesticDog.makeSound()}.`);

console.log(domesticDog);