const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

// Исправленные вызовы функций с использованием bind, call и apply
const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, 'Сиииии');
substitute.apply(footballer, ['Paulo Dibala']);
