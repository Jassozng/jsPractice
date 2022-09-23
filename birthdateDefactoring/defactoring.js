const date = "2002-04-18";

const dateDefactoring = (date) => {
    const today = new Date();
    const birthdate = new Date(date);
    const years = getPassedYears(birthdate, today);
    const months = getPassedMonths(birthdate, today);
    console.log(years);
    console.log(months);
}

function getPassedYears(birthdate, today){
    let passedYears = today.getYear() - birthdate.getYear(); 
    return  today.getMonth() > birthdate.getMonth() ? passedYears : passedYears - 1;
}

function getPassedMonths(birthdate, today){
    let passedYears = getPassedYears(birthdate, today);
    return (passedYears * 12) + (today.getMonth() - 1);

}

function getPassedDays(birthdate, today){
    const daysPassedByMonths = {"1": 31, "2": 59, "3": 90, "4": 120, "5": 151, "6": 181, "7": 212, "8": 243, "9": 273, "10": 304, "11": 30, "12": 265};
    let passedMonths = getPassedMonths(birthdate, today);
     
}

dateDefactoring(date);