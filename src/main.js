require('./utils');
const { Person } = require('./Model/Person');
const { Instance } = require('./Model/Instance');
const { shifts, colors } = require('./constants');

const me = new Person('Momo', colors.YELLOW);
const other = new Person('Shosho', colors.CYAN);
const inst = new Instance(me.id, 12, shifts.MORNING);
const inst2 = new Instance(me.id, 17, shifts.MORNING);
const inst3 = new Instance(me.id, 23, shifts.MORNING);
const inst4 = new Instance(other.id, 27, shifts.MORNING);

console.log(me, inst);