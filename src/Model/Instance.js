import {shifts} from '../constants';

export class Instance {
    constructor(personId, day, shift){
        this.id = utils.generateId();
        this.personId = personId;
        this.day = day;
        this.shift = shift;
    }
}