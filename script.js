//your JS code here. If required.

function isLeapYear(year){

  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInYear(year) {
	if(year){
		
  return isLeapYear(year) ? 366 : 365;
	}
}

let year = prompt("Enter Year");

alert(daysInYear(year))