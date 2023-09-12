const leapYears = function(year) {
if(year%4===0){
    if( year%100===0  ){
     if(year%400===0){
        year=true
     }
     else{
        year=false
     }
    }

else{

    year=true
}
}

else{
    year=false
}

return year
};

// Do not edit below this line
module.exports = leapYears;
