class CalcController {
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let timeCalcEl = document.querySelector("#hora");
        let dateCalcEl = document.querySelector("#data");
        displayCalcEl.innerHTML = "Eduardo"
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}
