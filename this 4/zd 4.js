const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
};

function checkChancesToWin(defenderObject) {
    let attackerUnits = Object.values(attacker);
    let defenderUnits = Object.values(defenderObject);
    let totalAttackerUnits = attackerUnits.reduce((total, units) => total + units, 0);
    let totalDefenderUnits = defenderUnits.reduce((total, units) => total + units, 0);

    let attackerChances = 0;
    let maximumChances = Object.keys(defenderObject).length;

    for (let unit in attacker) {
        if (attacker[unit] > defenderObject[unit]) {
            attackerChances++;
        }
    }

    return [attackerChances, maximumChances];
}

function improveArmy() {
    for (let unit in attacker) {
        if (typeof attacker[unit] === 'number') {
            attacker[unit] += 5;
        }
    }
}

function attack(defenderObject) {
    let [ourArmyChances, maximumChances] = checkChancesToWin(defenderObject);
    let attackPercentage = (ourArmyChances / maximumChances) * 100;

    if (attackPercentage < 70) {
        improveArmy();
        alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`);
    } else {
        alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
    }
}

attack(defender);
