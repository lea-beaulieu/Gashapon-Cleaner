// THE GENERAL PARAMETERS

// (CONFIG) 0.B. Defining the random method
function randLeft(fromLeft = 0, toLeft = 400) {

    return Math.floor(fromLeft + Math.random() * (toLeft - fromLeft));
}

function randTop(fromTop = 30, toTop = 300) {

    return Math.floor(fromTop + Math.random() * (toTop - fromTop));
}


/*(CONFIG) 0.B. Defining the random method for screen, NA FOR THE GAME
function rand(from = 0, to = 1) {

    return Math.floor(from + Math.random() * (to - from));
}
*/


// (CONFIG) 0.A. Defining the inital parameters, i.e scoring and timing
let pts = 0;
var remainTime;



//(CONFIG) 1. Defining the countdown rules
function start() {
    remainTime = 15;
    //for debug
    console.log("yes, set the countdown");
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
    // 15 = 3 red boxes x 5 sequences
    if (document.getElementById('countdown').textContent === "00:00" && pts >= 15) {
        countdown.innerHTML = "00:00";
        //setTimeout(alert("Yes, you nailed it !!"), 2000)
        location.replace("victory.html");
    } else if (document.getElementById('countdown').textContent === "00:00" && pts < 15) {
        countdown.innerHTML = "00:00";
        //setTimeout(alert("GAME OVER !"), 2000)
        location.replace("defeat.html");
    }
}


// THE GAME CONTENT

// (CONFIG) Counting occurences of sequence (5 sequences in total during the game)
let counterBoxSequence = 1;


// (CONFIG) Defining the BoxSequence launch, i.e. 3 Red boxes 
const boxSequence = function() {
    launchBlueBox();
    launchRedBox();
    setTimeout(launchRedBox2, 1000);
    setTimeout(launchRedBox3, 2000);
    //for Debug
    console.log(counterBoxSequence)
    timeoutId = setTimeout(boxSequence, 3000);
    counterBoxSequence += 1;

    if (counterBoxSequence > 5) {
        clearTimeout(timeoutId);
    }
};


// (CONFIG) Defining property of ONE RED box launch
function launchRedBox() {

    // Create a NEW div with the class 'redbox', each red box is separated in a proper div
    let $div = document.createElement('div');
    $div.classList.add('redbox');
    // Setting a random position where the box will appear
    let left = randLeft();
    let top = randTop();
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;

    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('bodybox')[0].appendChild($div);

    // Setting the actions WHEN clicking on the red box
    $div.onclick = function() {
        // Removing the red box
        document.getElementsByClassName('bodybox')[0].removeChild($div);
        // Updating the score (+1pts for each red box)
        document.querySelector('#score span').innerText = ++pts;
    }

}

function launchRedBox2() {

    // Create a NEW div with the class 'redbox', each red box is separated in a proper div
    let $div = document.createElement('div');
    $div.classList.add('redbox2');
    // Setting a random position where the box will appear
    let left = randLeft();
    let top = randTop();
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;

    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('bodybox')[0].appendChild($div);

    // Setting the actions WHEN clicking on the red box
    $div.onclick = function() {
        // Removing the red box
        document.getElementsByClassName('bodybox')[0].removeChild($div);
        // Updating the score (+1pts for each red box)
        document.querySelector('#score span').innerText = ++pts;
    }

}


function launchRedBox3() {

    // Create a NEW div with the class 'redbox', each red box is separated in a proper div
    let $div = document.createElement('div');
    $div.classList.add('redbox3');
    // Setting a random position where the box will appear
    let left = randLeft();
    let top = randTop();
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;

    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('bodybox')[0].appendChild($div);

    // Setting the actions WHEN clicking on the red box
    $div.onclick = function() {
        // Removing the red box
        document.getElementsByClassName('bodybox')[0].removeChild($div);
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
    let left = randLeft();
    let top = randTop();
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;


    // Adding this NEW div within the "tab" section 
    document.getElementsByClassName('bodybox')[0].appendChild($div);


    // Alterting the game WHEN clicking on a blue box
    $div.onclick = function() {
        alert("Hum stay focus, our customers will arrive soon !");
        //location.replace("defeat.html");
    }

}

// (CONFIG) Gathering all functions to be launched at the game start
// SWITCH TO VAR INSTEAD OF FUNCTION ? 

function startActions() {
    //starting countdown
    start()
        //starting the boxes launching after 0,5 scd
    setTimeout(boxSequence, 50)

}

// (DIRECT IMPACT ON THE GAME) Start : Launching the countdown and the boxes 
startbutton.onclick = function() { startActions() };