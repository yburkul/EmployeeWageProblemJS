//UC6 -Daily Employee Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_Working_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalempHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function getWorkingHours(empCheck) 
{
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}
let empHrs = 0;
let dailyEmpHrs = 0;
let dailyempwage = 0;

while (totalempHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= Num_OF_Working_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalempHrs += getWorkingHours(empCheck);
    dailyEmpHrs += getWorkingHours(empCheck);
    let empHrs = getWorkingHours(empCheck);
    totalempHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = totalempHrs * WAGE_PER_HOUR;
dailyempwage = dailyEmpHrs * WAGE_PER_HOUR;
console.log("Total Emp Wage: " + empWage+ "\nDaily Emp Wage: " +dailyEmpHrs);

//Array Helper Functions
// UC 7A - Calc Total Wage using Array foreach traversal or reduce method
let totEmpWage = 0;
function sum(dailyempwage){
    totEmpWage += dailyempwage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalempHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWages,dailyempwage){
    return totalWages + dailyempwage;
}
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages,0));

//UC 7B -Show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show Days When Full Time Wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurrence when Full Time Wage earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("First Time FullTime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if Every Element of Full Time Wage is truely holding Full Time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("Check All Element Have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC- 7G - Find the number of Days the Employee Worked
function totalDaysWorked(Num_OF_Working_DAYS,dailyWage)
{
    if(dailyWage > 0 ) return Num_OF_Working_DAYS+1;
    return Num_OF_Working_DAYS;
}
console.log("Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked,0));

//UC 8 - Map Function
console.log("Emp Wage Map Total Wages: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC 9- Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                      .filter(dailyHours => dailyHours > 0)
                      .reduce(findTotal,0);
let totalSalary = empDailyWageArr
                  .filter(dailyWage => dailyWage > 0)
                  .reduce(findTotal,0);
console.log("Emp Wage with Arrow: " + " Total Hours: " + totalHours + " Total Wages: " +totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);