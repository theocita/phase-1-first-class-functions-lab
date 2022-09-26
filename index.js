const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
returnFirstTwoDrivers;

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
returnLastTwoDrivers;

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fun = selectingDrivers[0] ();

function createFareMultiplier(num1){
    return function (num2){
        return num1 * num2;
    };
};

function fareDoubler(a){
    return Math.abs(2*(a));
};

function fareTripler(a){
    return Math.abs(3*(a));
};


function selectDifferentDrivers(a, b){ 
    return b(a);
}
