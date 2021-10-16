import {days} from '../constants';
export class Calendar {
    constructor(month, year) {
        this.data = [];
        const numOfDays = new Date(year, (month + 1), 0).getDate();

        console.log(numOfDays);
        let i = 1;
        while(i <= numOfDays) {
            let day = new Date(year, month, i).getDay();
            const weekData = {sunday:'',monday:'',tuesday:'',wednesday:'',thursday:'',friday:'',saturday:''};
            let prevWeekDays = day - 1;
            let prevMonthDays = new Date(year, month, 0).getDate();
            while(prevWeekDays >= 0) {
                weekData[days[prevWeekDays]] = prevMonthDays + '/' + (month - 1);
                prevWeekDays--;
                prevMonthDays--;
            }
            while(day < 7 && i <= numOfDays) {
                weekData[days[new Date(year, month, i).getDay()]] = i + '/' + month;
                day++;
                i++;
            }
            let nextWeekDays = day;
            let nextMonthDays = 1;
            while(nextWeekDays < 7) {
                weekData[days[new Date(year,((month + 1)),nextMonthDays).getDay()]] = nextMonthDays++ + '/' + ((month + 1) % 12);
                nextWeekDays++;
            }
          
            this.data.push(weekData);
            console.log(weekData);
        }
    }

    getData() {
        return this.data;
    }
}