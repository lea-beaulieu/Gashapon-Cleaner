function rand(from = 0, to = 1) {

    return Math.floor(from + Math.random() * (to - from));
}

let pts = 0;


/*for (let i = 0; i < 3; i++) {
    launchRedBox()[i];

} */



// Step 1 Launch Red Boxes (3 boxes each sec during 10 secondes)
let counterBoxSequence = 1;

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

let timeoutId = setTimeout(BoxSequence, 1000);


l

function launchRedBox() {


    let $div = document.createElement('div');
    $div.classList.add('redbox');
    let left = rand(0, window.innerWidth - 100);
    let top = rand(0, window.innerHeight - 100);
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;



    document.getElementsByTagName('body')[0].appendChild($div);


    $div.onclick = function() {
        document.getElementsByTagName('body')[0].removeChild($div);
        document.querySelector('#score span').innerText = ++pts;
    }

}

function launchBlueBox() {


    let $div = document.createElement('div');
    $div.classList.add('bluebox');
    let left = rand(0, window.innerWidth - 100);
    let top = rand(0, window.innerHeight - 100);
    $div.style.left = `${left}px`;
    $div.style.top = `${top}px`;



    document.getElementsByTagName('body')[0].appendChild($div);


    $div.onclick = function() {
        alert("you lose");
    }

}