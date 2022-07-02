const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    const returnFirstTwoDrivers = function (drivers) {
    return drivers.splice(0, 2);
    }
    return returnFirstTwoDrivers;
}
function returnLastTwoDrivers() {
    const returnLastTwoDrivers = function (drivers){
    return drivers.splice(2, drivers.length - 1);
    }
}