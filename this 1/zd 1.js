const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++;
        switch (this.level) {
            case 2:
                this.stack.push('CSS');
                break;
            case 3:
                this.stack.push('JavaScript');
                break;
            case 4:
                this.stack.push('React');
                break;
            case 5:
                this.stack.push('NodeJS');
                break;
            default:
                if (this.level > 5) {
                    alert("Студент выучил все технологии!");
                }
                break;
        }
        console.log("Уровень студента:", this.level);
        console.log("Стек студента:", this.stack);
        return this;
    }
}

console.log("Уровень студента:", this.level);
console.log("Стек студента:", this.stack);

student.improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();
