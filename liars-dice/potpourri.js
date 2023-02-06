// Try changing the capitalization of the the function name.
// Try changing "x" to "X" in the difference calculation.

let Dice = [[Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
[Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
[Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
[Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1]];

var playerTurn = true;
var bid = false;
document.getElementById("quantity").disabled = false;
document.getElementById("face").disabled = false;
var guessQuantity = 0;
var guessDie = 0;
document.getElementById("action").innerHTML = "";

function RollSixSidedDice() {
    Dice = [[Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
    [Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
    [Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1],
    [Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1,Math.floor(Math.random()*6) + 1]];
    playerTurn = true;
    bid = false;
    document.getElementById("quantity").disabled = false;
    document.getElementById("face").disabled = false;
    var guessQuantity = 0;
    var guessDie = 0;
    document.getElementById("quantity").value = "";
    document.getElementById("face").value = "";
    document.getElementById("action").innerHTML = "";
    document.getElementById("Amount").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
    document.getElementById("dice1").value = Dice[0][0];
    document.getElementById("dice2").value = Dice[0][1];
    document.getElementById("dice3").value = Dice[0][2];
    document.getElementById("dice4").value = Dice[0][3];
    document.getElementById("dice5").value = Dice[0][4];
    document.getElementById("c1dice1").value = "?";
    document.getElementById("c1dice2").value = "?";
    document.getElementById("c1dice3").value = "?";
    document.getElementById("c1dice4").value = "?";
    document.getElementById("c1dice5").value = "?";
    document.getElementById("c2dice1").value = "?";
    document.getElementById("c2dice2").value = "?";
    document.getElementById("c2dice3").value = "?";
    document.getElementById("c2dice4").value = "?";
    document.getElementById("c2dice5").value = "?";
    document.getElementById("c3dice1").value = "?";
    document.getElementById("c3dice2").value = "?";
    document.getElementById("c3dice3").value = "?";
    document.getElementById("c3dice4").value = "?";
    document.getElementById("c3dice5").value = "?";
}

function Challenge(player) {
    if(playerTurn==true && bid == true){
        playerTurn=false;
        document.getElementById("c1dice1").value = Dice[1][0];
        document.getElementById("c1dice2").value = Dice[1][1];
        document.getElementById("c1dice3").value = Dice[1][2];
        document.getElementById("c1dice4").value = Dice[1][3];
        document.getElementById("c1dice5").value = Dice[1][4];
        document.getElementById("c2dice1").value = Dice[2][0];
        document.getElementById("c2dice2").value = Dice[2][1];
        document.getElementById("c2dice3").value = Dice[2][2];
        document.getElementById("c2dice4").value = Dice[2][3];
        document.getElementById("c2dice5").value = Dice[2][4];
        document.getElementById("c3dice1").value = Dice[3][0];
        document.getElementById("c3dice2").value = Dice[3][1];
        document.getElementById("c3dice3").value = Dice[3][2];
        document.getElementById("c3dice4").value = Dice[3][3];
        document.getElementById("c3dice5").value = Dice[3][4];
        var ones = 0;
        var twos = 0;
        var threes = 0;
        var fours = 0;
        var fives = 0;
        var sixes = 0;
        for(i=0;i<4;i++){
            for(v=0;v<5;v++){
                if(Dice[i][v]==1){
                    ones += 1;
                } else if(Dice[i][v]==2){
                    twos += 1;
                } else if(Dice[i][v]==3){
                    threes += 1;
                } else if(Dice[i][v]==4){
                    fours += 1;
                } else if(Dice[i][v]==5){
                    fives += 1;
                } else if(Dice[i][v]==6){
                    sixes += 1;
                }
            }
        }
        if(guessDie == 1){
            document.getElementById("Amount").innerHTML = "There are "+ones+" rolled 1's!";
            if(guessQuantity<=ones){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        } else if(guessDie == 2){
            document.getElementById("Amount").innerHTML = "There are "+twos+" rolled 2's!";
            if(guessQuantity<=twos){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        } else if(guessDie == 3){
            document.getElementById("Amount").innerHTML = "There are "+threes+" rolled 3's!";
            if(guessQuantity<=threes){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        } else if(guessDie == 4){
            document.getElementById("Amount").innerHTML = "There are "+fours+" rolled 4's!";
            if(guessQuantity<=fours){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        } else if(guessDie == 5){
            document.getElementById("Amount").innerHTML = "There are "+fives+" rolled 5's!";
            if(guessQuantity<=fives){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        } else if(guessDie == 6){
            document.getElementById("Amount").innerHTML = "There are "+sixes+" rolled 6's!";
            if(guessQuantity<=sixes){
                document.getElementById("Result").innerHTML = player + " Wins";
            } else {
                document.getElementById("Result").innerHTML = player + " Loses";
            }
        }
    }
    
}

function makeBid(){
    if (playerTurn == true){
        if(bid == false){
            var numbers = /^[0-9]+$/;
            if(document.getElementById("quantity").value.match(numbers) && document.getElementById("face").value.match(numbers))
            {
                playerTurn = false;
                document.getElementById("quantity").disabled = true;
                document.getElementById("face").disabled = true;
                guessQuantity = document.getElementById("quantity").value;
                guessDie = document.getElementById("face").value;
                document.getElementById("action").innerHTML = "Player bid "+guessQuantity+" rolled "+guessDie+"'s!";
                init();
            }
        } else if (bid == true){
            guessQuantity ++;
            document.getElementById("action").innerHTML = "Player bid "+guessQuantity+" rolled "+guessDie+"'s!";
            playerTurn = false;
            init();
        }
        
    }
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function init(){
    await delay(1000);
    if(Math.random() < 0.15){
        bid = true;
        playerTurn = true;
        document.getElementById("action").innerHTML = "CPU 1 challenged Player on their bid of "+guessQuantity+" rolled "+guessDie+"'s!";
        Challenge("Player");
        return;
    } else {
        guessQuantity ++;
        document.getElementById("action").innerHTML = "CPU 1 bid "+guessQuantity+" rolled "+guessDie+"'s!";
    }
    await delay(1000);
    if(Math.random() < 0.15){
        bid = true;
        playerTurn = true;
        document.getElementById("action").innerHTML = "CPU 2 challenged CPU 1 on their bid of "+guessQuantity+" rolled "+guessDie+"'s!";
        Challenge("CPU 1");
        return;
    } else {
        guessQuantity ++;
        document.getElementById("action").innerHTML = "CPU 2 bid "+guessQuantity+" rolled "+guessDie+"'s!";
    }
    await delay(1000);
    if(Math.random() < 0.15){
        bid = true;
        playerTurn = true;
        document.getElementById("action").innerHTML = "CPU 3 challenged CPU 2 on their bid of "+guessQuantity+" rolled "+guessDie+"'s!";
        Challenge("CPU 2");
        return;
    } else {
        guessQuantity ++;
        document.getElementById("action").innerHTML = "CPU 3 bid "+guessQuantity+" rolled "+guessDie+"'s!";
    }
    bid = true;
    playerTurn = true;
}