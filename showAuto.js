var autoMake = "Ford";
var autoModel = "LTD";

function showAuto(year){
  function autoInfo(){
    var price = 124;
    console.log("Auto is a " + year + " " + autoMake + " " + autoModel + ", it's price is " + price + "$");
  }

  autoInfo();
};

showAuto(1969);
