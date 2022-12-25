import { ICheesePizza } from '../interface/cheesePizza.interface';
import Pizza from './pizza.model';

class CheesePizza extends Pizza implements ICheesePizza {
    cheese: number;

    constructor(name: string, size: number, price: number, cheese: number) {
        super(name, size, price);
        this.cheese = cheese;
    }
}

export default CheesePizza;
