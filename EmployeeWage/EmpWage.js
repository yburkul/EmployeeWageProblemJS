//UC1 - Emp is Present or absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 2);
if (empCheck == IS_ABSENT)
{
    console.log("Employee is ABSENT");
} 
else 
{
    console.log("Employee is PRESENT");
}