import PizzaFactory from '../factory/pizza.factory';
import Pizza from '../model/pizza.model';
class PizzaStore {
    pizzaFactory: PizzaFactory;
    constructor(pizzaFactory: PizzaFactory) {
        this.pizzaFactory = pizzaFactory;

    }

    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.pizzaFactory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

}

export default PizzaStore;