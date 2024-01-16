import { szenvedoMondatok } from "./angol";

class Model{

    #lista = []
    #cim = ""
    #obj = {}
    #index = 2;
    constructor(){
        this.#lista = szenvedoMondatok;
        this.#cim = this.#lista[0];
        this.#obj = this.#lista[this.#index];
    }

    setIndex(i){
        this.#index = i;
        this.#obj = this.#lista[this.#index];
    }

    getCim(){
        return this.#cim;
    }

    getMondat(){
        return this.#obj.mondat.split('_');
    }

    getAlap(){
        return this.#obj.alap;
    }

    getHossz(){
        return szenvedoMondatok.length - 2;
    }

    getHelyes(){
        return this.#obj.valasztas[0];
    }

}export default Model