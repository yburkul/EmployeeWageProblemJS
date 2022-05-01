//UC5 Calculating Wages till number of working Days or Total Working Hours per Month
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_Working_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalempHrs = 0;
let totalWorkingDays = 0;
let empHrs = 0;
let dailyEmpHrs = 0;
let dailyempwage = 0;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while (totalempHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= Num_OF_Working_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalempHrs += getWorkingHours(empCheck);
    dailyEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalempHrs * WAGE_PER_HOUR;
dailyempwage = dailyEmpHrs * WAGE_PER_HOUR;
console.log("Total Emp Wage: " + empWage+ "\nDaily Emp Wage: " +dailyEmpHrs);