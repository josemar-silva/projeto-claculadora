class CalcController { // criar classe

    constructor(){ // declarar metodo construtor

        this._displayCalc = '5'; // declarar atributos da classe
        this._currentDate ; // declarar atributos da classe
    }

    

    get displayCalc(){ // criar metodos get e set
        return this._displayCalc; // criar metodos get e set
    }

    set displayCalc(valor){ // criar metodos get e set
        this._displayCalc = valor; // criar metodos get e set
    } 

    get currentDate(){ // criar metodos get e set
        return this._currentDate; // criar metodos get e set
    }

    set currentDate(date){ // criar metodos get e set
        this._currentDate = date; // criar metodos get e set
    }

}