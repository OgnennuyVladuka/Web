const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};

let isDomestic = prompt("Введите значение для переменной isDomestic:");

function makeDomestic(isDomestic) {
    return {
        ...this,
        isDomestic: isDomestic
    };
}

const domesticBird = makeDomestic.apply(bird, [isDomestic]);

console.log(`${domesticDog.type} по имени ${domesticDog.name} говорит ${domesticDog.makeSound()}.`);

console.log(domesticDog);
