// THE GENERAL PARAMETERS

// (CONFIG) 0.B. Defining the random method
function rand(from = 0, to = 1) {

    return Math.floor(from + Math.random() * (to - from));
}


// (CONFIG) 0.A. Defining the inital parameters, i.e scoring and timing
let pts = 0;
var remainTime;



//(CONFIG) 1. Defining the countdown rules
function start() {
    remainTime = 35;
    //for debug
    console.log("yes");
    render();
    // Setting the countdown parameters, -1scd applied to the "counter"
    counter = setInterval(() => {
        remainTime -= 1;
        render();
        defineStatus();
    }, 1000);
};

// Retrieving the remaining time
function render() {

    if (remainTime == 0) {
        // Stoping the countdown
        clearInterval(counter);
        countdown.innerHTML = "00:00";

    } else {
        // Updating the countdown span in realtime in HTML document
        document.querySelector('#countdown span').innerText = remainTime;
    }
};

function defineStatus() {
    if (document.getElementById('countdown').textContent === "00:00" && pts >= 30) {
        countdown.innerHTML = "00:00";
        setTimeout(alert("won"), 2000)
    } else if (document.getElementById('countdown').textContent === "00:00" && pts < 30) {
        countdown.innerHTML = "00:00";
        setTimeout(alert("lose"), 2000)
    }
}


// THE GAME CONTENT

// (CONFIG) Counting occurences of sequence (10 sequences in total during the game)
let counterBoxSequence = 1;


// (CONFIG) Defining the BoxSequence launch, i.e. 3 Red boxes + 1 Blue box each 2 seconds during 10 seconds
const boxSequence = function() {
    launchRedBox();
    launchRedBox();
    launchRedBox();
    launchBlueBox();
    //for Debug
    console.log(counterBoxSequence)
    timeoutId = setTimeout(boxSequence, 3000);
    counterBoxSequence += 1;

    if (counterBoxSequence > 10) {
        clearTimeout(timeoutId);
    }
};


// (CONFIG) Defining property of ONE RED box launch
function launchRedBox() {

    // Create a NEW div with the class 'redbox', each red box is separated in a proper div
    let $div = document.createElement('div');
    $div.classList.add('redbox');
    // Setting a random position where the box will appear
    let left = rand(0, window.innerWidth - 100);
    let top = rand(0, window.innerHeight - 100);
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;

    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('balls')[0].appendChild($div);

    // Setting the actions WHEN clicking on the red box
    $div.onclick = function() {
        // Removing the red box
        document.getElementsByClassName('balls')[0].removeChild($div);
        // Updating the score (+1pts for each red box)
        document.querySelector('#score span').innerText = ++pts;
    }

}

// (CONFIG) Defining property of ONE BLUE box launch
function launchBlueBox() {


    // Create a NEW div with the class 'bluebox', each blue box is separated in a proper div
    let $div = document.createElement('div');
    $div.classList.add('bluebox');
    // Setting a random position where the box will appear
    let left = rand(0, window.innerWidth - 100);
    let top = rand(0, window.innerHeight - 100);
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;


    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('balls')[0].appendChild($div);


    // Stopping the game WHEN clicking on a blue box
    $div.onclick = function() {
        alert("you lose");
        //location.replace("defeat.html");
    }

}

// (CONFIG) Gathering all functions to be launched at the game start
// SWITCH TO VAR INSTEAD OF FUNCTION ? 

function startActions() {
    //starting countdown
    start()
        //starting the boxes launching after 3 scds
    setTimeout(boxSequence, 3000)

}

// (DIRECT IMPACT ON THE GAME) Start : Launching the countdown and the boxes (x30 sequences)
startbutton.onclick = function() { startActions() };