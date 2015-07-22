<script> //Creates a popup box with text Hello World! function sayHello() { alert("Hello World!"); } </script>

<p>Click the button to call the function</p>
<form>
     <input type="button" onclick="sayHello()" value="Click Me!">
</form>

<script>
    function changeImage() {
        document.getElementById("lbulb").src = "http://www.w3schools.com/js/pic_bulbon.gif";
        var par = document.getElementById("sample1");
        par.style.color = "yellow";
        par.style.fontWeight = "bold";
    }
</script>

<p>Image and Style</p>
<img src="/images/pic_bulboff.gif" onclick="changeImage()" alt="Lightbulb" id="lbulb" />
<p id="sample1">Click the light bulb to turn it on!</p>

<script>
     function outputDetails(name, age){
        document.write (name + " is " + age + " years old.");
     }
</script>

<p>Example with Parameters</p>
<p>Click the button to call the function</p>
<form>
    <input type="button" onclick="outputDetails('Senyora', 18)" value="View Senyora Details">
</form>

<script>
    //Concatenates the first and last name
    function concatenate(first, last) {
        var full;
        full = first + " " + last;
        return full;
    }

    //Writes in the page the first and last name values
    function outputName(first, last) {
        document.write ("First name: " + first + ".<br>");
        document.write ("Last name: " + last + ".<br>");
        var result = concatenate(first, last)
        document.write ("Put it together: " + result + "!");
    }
</script>

<p>Example with Return Value</p>
<p>Click the button to call the function</p>
<form>
    <input type="button" onclick="outputName('Anna', 'Manalastas')" value="Concatenate!">
</form>

<script>
    function getCelsius() {
        var fahr = document.getElementById("fahrenheit").value;
        document.getElementById("celsius").value = (5/9) * (fahr-32);
    } 
</script>

<p>Convert Fahr to Cel</p>
<form>
    <label>Fahrenheit</label>
    <input type="text" name="fahrenheit" id="fahrenheit">
    <label>Celsius</label>
    <input type="text" name="celsius" id="celsius">
    <input type="button" onclick="getCelsius()" value="Convert">
</form>

<script>
    function convertToHex() {
        document.getElementById("sample2").innerHTML = "0xFF = " + 0xFF;
    }
</script>

<p>Hexadecimal Values</p>
<input type="button" onclick="convertToHex()" value="Convert"/>
<p id="sample2"></p>

<script>
    function computeInf() {
        var x = 2/0;
        var y = -2/0;
        document.getElementById("sample3").innerHTML = "To " + x + " or " + y + " and Beyond!";
    }
</script>

<p>Infinity Example</p>
<input type="button" onclick="computeInf()" value="Compute" />
<p id="sample3"></p>

<script>
    function computeNaN() {
        document.getElementById("sample4").innerHTML = 100 / "Hello World!";
    }
</script>

<p>NaN Example</p>
<input type="button" onclick="computeNaN()" value="Compute" />
<p id="sample4"></p>

<script>
    function numToStr(num1, num2) {
        var x = num1+ num2;
        var x = num1.toString() + num2.toString();
        document.getElementById("sample5").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + x + ". <br/> Put it together: " + y + "! <3";
    }
</script>

<p>Num to Str</p>
<input type="button" onclick="numToStr(14, 3)" value="Convert Number" />
<p id="sample5"></p>

<script>
    function strToNum(str1, str2) {
        var w = parseInt(str1);
        var x = parseInt(str2);
        var y = parseFloat(str2);
        var z;    //try to convert str1 to float
        document.getElementById("sample6").innerHTML = w + "<br/>" + x + "<br/>" + y;
    }
</script>

<p>Str to Num</p>
<input type="button" onclick="strToNum('15','10.333')" value="Convert" />
<p id="sample6"></p>

<script>
    function outputCons() {
        document.getElementById("sample7").innerHTML = "E = " + Math.E + "<br>" + "PI = " + Math.PI + "<br>" + "Square root of 2 = " + Math.SQRT2 + "<br>";
    }
</script>

<p>Here are some Math constants.</p>
<input type="button" onclick="outputCons()" value="Print Constants"/>
<p id="sample7"></p>

<script>
    function getMax() {
        document.getElementById("sample8").innerHTML = Math.max(0, 150, 30, 20, -8);
    }
</script>

<p>String Method Example</p>
<input type="button" onclick="getMax()" value="Find Max"/>
<p id="sample8"></p>

<script>
    function getRand() {
        var x = Math.random(); //randomize
        var y = Math.floor((Math.random() * 50) + 1); //randomize between 1 to 50
        document.getElementById("sample9").innerHTML = x + "<br/>" + y;
        document.getElementById("rand").value = "Click Me Baby One More Time!";
    }
</script>

<p>Randomize</p>
<input id="rand" type="button" onclick="getRand()" value="Click Me!"/>
<p id="sample9"></p>