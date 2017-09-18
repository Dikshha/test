function Display(){
    console.log("Heelo from display");

}
function Wishes(){
    console.log("Hello from wishes");

}

var f1= function(cb){
cb();
}
f1(Display);
f1(Wishes);