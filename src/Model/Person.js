export class Person {
    constructor(name, color) {
        this.id = utils.generateId();
        this.name = name;
        this.color = color;
    }
}