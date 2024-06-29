function receivesAFunction(callback) {
    callback();
}
function returnsAnAnonymousFunction() {
    return function(){
        console.log ("This is an anonymous function");
    }
}