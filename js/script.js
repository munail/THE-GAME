function Roll(); {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var status = document.getElementById("satus1");
    var dice3 = document.getElementById("dice3");
    var dice4 = document.getElementById("dice4");
    var status = document.getElementById("satus2");
    var d1 = math.floor(math.random() * 6) + 1;
    var d2 = math.floor(math.random() * 6) + 1;
    var d3 = math.floor(math.random() * 6) + 1;
    var d4 = math.floor(math.random() * 6) + 1;
    var diceTotal1 = d1 + d2;
    var diceTotal2 = d3 + d4;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;
    dice3.innerHTML = d3;
    dice4.innerHTML = d4;
    status1.innerHTML = ("you rolled" + diceTotal1 + ".");
    if (d1 == d2) {
        status1.innerHTML += " Double! you get a free turn !!";
    }
    status2.innerHTML = ("you rolled" + diceTotal2 + ".");
    if (d3 == d4) {
        status1.innerHTML += " Double! you get a free turn !!";
    }
});
s