function random(n) {
	
			return Math.round(Math.random() * n);
	
	
}
var n = random(10);
var i = 0;
for (i = 0; i < 3; i += 1) {
    var x = prompt("try:");
    if (x == n) {
        break;
    } else if (x > n) {
        alert("less");
    } else {
        alert("more");
    }
}
if (x == n) {
    alert("Congrats! You won :)");
} else {
    alert("try again :(");
}