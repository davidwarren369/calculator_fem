



// 3. Function created to handle button clicks //

function buttonClick(value) {         // Function created to take in 'innerText'//  // value - 8, 9, % etc. inside the button //
                                      // 'routing' different ways based on if the value is a 'number' or a 'symbol' //
    if (isNaN(parseInt(value))) {     // if 'value' is not a number, we have a symbol //
        handleSymbol(value);
    } else {
        handleNumber(value);          // else 'value' is a number, we have a number //
    }                           
}


// 4. //

function handleNumber(number) {
    console.log('number');
}


function handleSymbol(symbol) {
    console.log('symbol');
}


// 1. Function created (called init) - initilise everything i.e. the webpage //

function init() {
    document
        .querySelector('.calc-buttons')                   // Find the 'calc-buttons' - line 14 HTML doc (<section class="calc-buttons">) //
           .addEventListener("click", function(event) {   // add an event listener, whenever someone clicks on a button // 
              buttonClick(event.target.innerText);        // runs a function called 'buttonClick' with the 'innerText' - C, 9, back arrow //
        });                                               // the event.target is the 'div' that was clicked i.e. the 'button' //
}

// 2. Init function called //

init();         // Calling the 'init' function, function above will not run unless it is called first //
