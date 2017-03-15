function greet(){
    console.log("Hi");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

var greetMe = function(){
    console.log('Hi NTUE!');
}
greetMe();

logGreeting(function() {
	console.log('Hello NTUE!');
});
