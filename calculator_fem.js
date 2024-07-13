let buffer = '0';                                        // 4. // 

const screen = document.querySelector('.screen');        // 5. //



// 3. Function created to handle button clicks //

function buttonClick(value) {         // Function created to take in 'innerText'//  // value - 8, 9, % etc. inside the button //
                                      // 'routing' different ways based on if the value is a 'number' or a 'symbol' //
    if (isNaN(parseInt(value))) {     // if 'value' is not a number, we have a symbol //
        handleSymbol(value);
    } else {
        handleNumber(value);          // else 'value' is a number, we have a number //
    }   
    rerender();     // when a value button is clicked the 'rerender function' is called, the value appears on the screen //                         
}


// 4. &  5. //

function handleNumber(number) {
    if (buffer === '0') {         // if buffer triple equals 0//
        buffer = number;          // then buffer is assigned the number //
    } else {                      // else //
        buffer += number;         // buffer = buffer + number //
    }
}


// 4. &  6. //

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':                   // if symbol === 'C'//
            buffer = '0';           // then buffer = '0' //
            break;
        case '=':
            console.log('equals');
            break;
        case '←':                                                           // if symbol === '←' //
            if (buffer.length === 1) {                                      // if the length of the buffer is equal to 1//
                buffer = '0';                                               // then '0' is the value in in the buffer screen // 
            } else {
                buffer = buffer.substring(0, buffer.length - 1);            // take the numberical string in the buffer and remove the last number //
            }
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            console.log('math symbol');
            break;
    }
}


// 1. Function created (called init) - initilise everything i.e. the webpage //

function init() {
    document
        .querySelector('.calc-buttons')                   // Find the 'calc-buttons' - line 14 HTML doc (<section class="calc-buttons">) //
           .addEventListener("click", function(event) {   // add an event listener, whenever someone clicks on a button // 
              buttonClick(event.target.innerText);        // runs a function called 'buttonClick' with the 'innerText' - C, 9, back arrow //
        });                                               // the event.target is the 'div' that was clicked i.e. the 'button' //
}


// 5. Screen rerender function//

function rerender() {            // when function is called ot makes buffer and screen be the same thing //
    screen.innerText = buffer;   // ability to make the screen rerender //
}


// 2. Init function called //

init();         // Calling the 'init' function, function above will not run unless it is called first //
