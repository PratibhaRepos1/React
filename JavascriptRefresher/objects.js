var storeManager = {
    movement: 4,
    socialSkills:50,
    streetSmart:30,
    health: 40
};

console.log(storeManager.movement);
storeManager.nextMove = false;
console.log(storeManager);

//Object literals and the brackets notation

var house2 = {};
house2["rooms"] = 4;
house2["color"] = 'pink';
house2["priceUSD"] = 1234;
console.log(house2);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude:200,
    color:'red'
}
for(var i=0; i< arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}