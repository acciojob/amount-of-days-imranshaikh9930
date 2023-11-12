//your JS code here. If required.

function isLeapYear(year){

  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

console.log(daysInYear(2000));