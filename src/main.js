require('./utils');
const { Person } = require('./Model/Person');
const { Instance } = require('./Model/Instance');
const { Calendar } = require('./Model/Calendar');
const { shifts, colors } = require('./constants');
const XLSX = require('xlsx');

const me = new Person('Momo', colors.YELLOW);
const other = new Person('Shosho', colors.CYAN);
const inst = new Instance(me.id, 12, shifts.MORNING);
const inst2 = new Instance(me.id, 17, shifts.MORNING);
const inst3 = new Instance(me.id, 23, shifts.MORNING);
const inst4 = new Instance(other.id, 27, shifts.MORNING);

const data = [{
    firstName: 'John',
    lastName: 'Doe'
   }, {
    firstName: 'Smith',
    lastName: 'Peters'
   }, {
    firstName: 'Alice',
    lastName: 'Lee'
   }]

   const cal = new Calendar(11,2022);

   console.log(cal.getData());

   const ws = XLSX.utils.json_to_sheet(cal.getData());
   const wb = XLSX.utils.book_new()
   XLSX.utils.book_append_sheet(wb, ws, 'Responses')
   XLSX.writeFile(wb, 'sampleData.export.xlsx')

console.log(me, inst);