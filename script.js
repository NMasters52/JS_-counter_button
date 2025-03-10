const elements = {
    count: document.getElementById('count'),
    incrementButton: document.getElementById('incrementButton')
};

//create value to hold count
let count = 0;

//create funciton to change state of count
function increaseCount() {
    count++;
    updateCount();
}

//create function to update count on the screen
function updateCount() {
    elements.count.innerText = count;
}

function initializeApp() {
    //initializes count on page load
    updateCount();

    //sets up event listner
    elements.incrementButton.addEventListener('click', increaseCount);
}

initializeApp();



