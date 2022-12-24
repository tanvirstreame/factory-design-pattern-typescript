import { IPepperoniPizza } from "../interface/pepperoniPizza.interface";
import Pizza from "./pizza.model";

class PepperoniPizza extends Pizza implements IPepperoniPizza {
    pepperoni: number;

    constructor(name: string, size: number, price: number, pepperoni: number) {
        super(name, size, price);
        this.pepperoni = pepperoni;
    }
}

export default PepperoniPizza;
