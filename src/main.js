require('./utils');
const { Person } = require('./Model/Person');
const { Instance } = require('./Model/Instance');
const { Calendar } = require('./Model/Calendar');
const { shifts, colors } = require('./constants');
const ExcelJS = require('exceljs');

const me = new Person('Momo', colors.YELLOW);
const other = new Person('Shosho', colors.CYAN);
const inst = new Instance(me.id, 12, shifts.MORNING);
const inst2 = new Instance(me.id, 17, shifts.MORNING);
const inst3 = new Instance(me.id, 23, shifts.MORNING);
const inst4 = new Instance(other.id, 27, shifts.MORNING);


   const cal = new Calendar(9,2021);

   console.log(cal.getData());

   //const ws = XLSX.utils.json_to_sheet(cal.getData());

   const data = cal.getData();
   
   const wb = new ExcelJS.Workbook();
   wb.properties.date1904 = true;
   wb.calcProperties.fullCalcOnLoad = true;
   const ws = wb.addWorksheet("Responses")
   ws.columns = [
       {header: 'Sunday', key: 'sunday', width: 15},
       {header: 'Monday', key: 'monday', width: 15},
       {header: 'Tuesday', key: 'tuesday', width: 15},
       {header: 'Wednesday', key: 'wednesday', width: 15},
       {header: 'Thursday', key: 'thursday', width: 15},
       {header: 'Friday', key: 'friday', width: 15},
       {header: 'Saturday', key: 'saturday', width: 15}
   ]
   const rowData = {
       sunday: {richText: [{text: 'עומר'}]},
       monday: '',
       tuesday: '',
       wednesday: new Date(2017,2,15),
       thursday: '',
       friday: '',
       saturday: ''
   };
    for(let row of Object.values(data)) {
        ws.addRow(row);
        ws.addRow(rowData);
        ws.addRow(rowData);
        ws.addRow(rowData);
    }
    ws.findCell
    ws.eachRow(a => {
        a.alignment = {
            vertical: 'center',
            horizontal: 'center'
        }
        a.eachCell(cell => {
            if(cell.value.richText && cell.value.richText[0].text == 'עומר') { //todo
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: 'FFFF0000'
                    }
                }
                cell.font = {
                    bold: true
                }
            }
        })
    })
  // XLSX.utils.book_append_sheet(wb, ws, 'Responses')
   wb.xlsx.writeFile('data.xlsx')

console.log(me, inst);