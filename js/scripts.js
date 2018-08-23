'use strict';

//hermetyzacja
(function(){
    //konstruktor
    class Calculator {
        constructor(button, result) {
            this._button = document.querySelectorAll(button);
            this._resPlace = document.querySelector(result);
            this._assignEvents(this._button);
        }
        _assignEvents(button) {
            button.forEach(this._click, this);
        }
        _click(button) {
            button.addEventListener('click', this._calculate.bind(this));
        }
        _calculate(button) {
            var buttonValue = button.target.value;
            if (buttonValue === 'C') {
                this._resPlace.value = '';
            }
            else if (buttonValue === '=') {
                this._resPlace.value = eval(this._resPlace.value);
            }
            else {
                this._resPlace.value += buttonValue;
            }
            return this._resPlace.value;
        }
    }

    var obliczenia = new Calculator ('input[type ="button"]', '#result');
})();

// trzeba było tylko te żarówkę kliknąć czy coś jeszcze zrobić?