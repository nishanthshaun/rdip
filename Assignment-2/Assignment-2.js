//calculator.html
function dis(val) 
{
    document.getElementById("result").value += val
    return val
}
function solve() 
{
    var x = document.getElementById("result").value
    y = eval(x)
    document.getElementById("result").value = y
    return y
}
function clr() 
{
    document.getElementById("result").value = " "
    return clr()
}
function square() 
{
    var x = Math.sqrt(Number(document.getElementById("result").value))
    document.getElementById("result").value = x
    if(y % x === 0)
    {
        document.getElementById("result").value = x
        return x
    }
    else
    {
        x = x.toFixed(3)
        document.getElementById("result").value = x
        return x
    }
}
function abs()
{
    var x = Math.abs(Number(document.getElementById("result").value))
    document.getElementById("result").value = x
    return x
}  
function calculatePercent(percent, num) {
    return (percent / 100) * num;
}
//form.html -> Validation of form
function formValidation()
{
    var uname = document.registration.username;
    var uemail = document.registration.email;
    var uphone = document.registration.phone;
    if (allLetter(uname)) 
    {         
        if (ValidateEmail(uemail)) 
        {
            if(phonenumber(uphone))
            {
            }

        }
        return false;
    }
}
    function allLetter(uname) {
        var letters = /^[A-Za-z]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else {
            alert('Username must have alphabet characters only');
            uname.focus();
            return false;
        }
    }
function ValidateEmail(uemail) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) 
    {
        return true;
    }
    else 
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function phonenumber(uphone) 
{
    var phoneno = /^\d{10}$/;
    if (uphone.value.match(phoneno))
    {
        return true;
    }
    else
    {
        alert("Enter a 10-digit number");
        return false;
    }
}
//task-3.html -> Palindrome
function checkPalindrome() 
{
    var revStr = "";
    var str = document.getElementById("str").value;
    var i = str.length;
    for (var j = i; j >= 0; j--) {
        revStr = revStr + str.charAt(j);
    }
    if (str == revStr) {
        alert(str + " -is Palindrome");
        return true;
    }
    else {
        alert(str + " -is not a Palindrome");
        return false;
    }
}
//task-3 -> Anagram
var button = document.getElementById('button-test');
button.addEventListener('click', checkAnagram);
var resultDiv = document.getElementById('result');

function checkAnagram() {
    var str1 = document.getElementById('string1').value;
    var str2 = document.getElementById('string2').value;
    if (str1 !== null && str2 !== null) {
        if (str1.length !== str2.length) {
            resultDiv.innerHTML = "Strings are not anagrams.";
            return false;
        }
        var hashTable = {};
        for (var i = 0; i < str1.length; i++) {
            if (hashTable.hasOwnProperty(str1[i])) {
                hashTable[str1[i]] = hashTable[str1[i]] + 1;
            } else {
                hashTable[str1[i]] = 1;
            }
        }

        for (var i = 0; i < str2.length; i++) {
            if (hashTable.hasOwnProperty(str2[i])) {
                hashTable[str2[i]] = hashTable[str2[i]] - 1;
            } else {
                resultDiv.innerHTML = "Strings are not anagrams.";
                return false;
            }
        }
        for (var i in hashTable) {
            if (hashTable[i] !== 0) {
                resultDiv.innerHTML = "Strings are not anagrams.";
                return false;
            } else {
                resultDiv.innerHTML = "Strings are anagrams!";
                return true;
            }
        }
    }
}
//task-4.html -> Mapping
function mapfunc() {
    var a = Math.floor(Math.random() * 1001);
    var b = Math.floor(Math.random() * 1001);
    document.getElementById("number1").value = a;
    document.getElementById("number2").value = b;
}
function findfunc() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = a % 3;
    var d = b % 3;
    if (c == 0) {
        document.getElementById("string1").value = "Cockroach";
    }
    else if (c == 1) {
        document.getElementById("string1").value = "Human";
    }
    else {
        document.getElementById("string1").value = "Nuclearbomb";
    }
    if (d == 0) {
        document.getElementById("string2").value = "Cockroach";
    }
    else if (d == 1) {
        document.getElementById("string2").value = "Human";
    }
    else {
        document.getElementById("string2").value = "Nuclearbomb";
    }
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;
    if (str1 == str2) {
        alert("Tie");
        return true;
    }
    if (((str1 == "Nuclearbomb") || (str2 == "Nuclearbomb")) && ((str1 == "Cockroach") || (str2 == "Cockroach"))) {
        alert("Cockroach wins...!");
        return true;
    }
    else if (((str1 == "Nuclearbomb") || (str2 == "Nuclearbomb")) && ((str2 == "Human") || (str1 == "Human"))) {
        alert("NuclearBomb  wins...!");
        return true;
    }
    else if (((str1 == "Cockroach") || (str2 == "Cockroach")) && ((str2 = "Human") || (str1 = "Human"))) {
        alert("Human wins...!");
        return true;
    }
}
//bonus.html
const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
    const temp = from_currencyEl.value;
    from_currencyEl.value = to_currencyEl.value;
    to_currencyEl.value = temp;
    calculate();
});

function calculate() {
    const from_currency = from_currencyEl.value;
    const to_currency = to_currencyEl.value;

    fetch(`https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=ecd96f38ab9cbbe978b7`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[to_currency];
            rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
            to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        })
}

calculate();