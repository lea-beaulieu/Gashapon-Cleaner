// Parameters A. Setting Random 
function rand(from = 0, to = 1) {

    return Math.floor(from + Math.random() * (to - from));
}


// Parameters B. Scoring
let pts = 0;


// THE GAME LOGIC

// (CONFIG) Counting occurences of sequence (10 sequences in total during the game)
let counterBoxSequence = 1;


// (CONFIG) Defining the BoxSequence launch, i.e. 3 Red boxes + 1 Blue box each 2 seconds during 10 seconds
const BoxSequence = function() {

    launchRedBox();
    launchRedBox();
    launchRedBox();
    launchBlueBox();
    console.log(counterBoxSequence)
    timeoutId = setTimeout(BoxSequence, 1000);
    counterBoxSequence += 1;

    if (counterBoxSequence > 10) {
        clearTimeout(timeoutId);
    }
};

// (DIRECT IMPACT ON THE GAME) Launching the boxes with Box Sequence
BoxSequence()



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
    document.getElementsByTagName('table')[0].appendChild($div);

    // Setting the actions WHEN clicking on the red box
    $div.onclick = function() {
        // Removing the red box
        document.getElementsByTagName('table')[0].removeChild($div);
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
    document.getElementsByTagName('table')[0].appendChild($div);


    // Stopping the game WHEN clicking on a blue box
    $div.onclick = function() {
        alert("you lose");
        location.replace("defeat.html");
    }

}