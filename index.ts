import PizzaFactory from "./factory/pizza.factory";
import PizzaStore from "./store/pizza.store";

let pizzaFactory = new PizzaFactory();
let pizzaStore = new PizzaStore(pizzaFactory);
console.log("order cheese pizza",pizzaStore.orderPizza("cheese"));
console.log("order pepperoni pizza",pizzaStore.orderPizza("pepperoni"));
