<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo1").innerHTML = z;

var name = "Tiffany";
document.getElementById("demo2").innerHTML = name;

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo3").innerHTML = txt.length;

document.getElementById("demo4").innerHTML = "Hello" + " World!";

document.getElementById("demo5").innerHTML = "Hello \"World\"!";

var pets = ["cat", "dog", "duck"];
document.getElementById("demo6").innerHTML = pets[0];

var person = {firstName:"Grace", lastName:"Poe", age:46};
document.getElementById("demo7").innerHTML = person.firstName + " is " + person.age + " years old.";

var str = "Apple, Banana, Kiwi";
document.getElementById("demo8").innerHTML = str.slice(7,13);

document.getElementById("demo9").innerHTML = str.slice(7);

var str = "Apple, Banana, Kiwi";
document.getElementById("demo10").innerHTML = str.substr(7,6);

var str = document.getElementById("demo11").innerHTML; 
var txt = str.replace("ex","someone new");
document.getElementById("demo11").innerHTML = txt;

var text = document.getElementById("demo12").innerHTML;
document.getElementById("demo12").innerHTML = text.toUpperCase();

var text = document.getElementById("demo13").innerHTML;
document.getElementById("demo13").innerHTML = text.toLowerCase();

var lyrics1 = "I got all I need";
var lyrics2 = " when I got you and I.";
document.getElementById("demo14").innerHTML = lyrics1.concat(lyrics2);

var str = "HELLO WORLD";
document.getElementById("demo15").innerHTML = str.charAt(0);

var str = "r|e|a|d";
var arr = str.split("|");
document.getElementById("demo16").innerHTML = arr[0];

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

<!--You can join strings and html tags too!-->
<!--Tags should be inside double/singe quotes while variables are as is-->
document.getElementById("demo17").innerHTML = fname.value + "<br>" + lname.value;

var d = new Date();
document.getElementById("demo18").innerHTML = d;

var d = new Date();
document.getElementById("demo19").innerHTML = d.toDateString();
</script>
