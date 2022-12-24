import  Pizza  from "../model/pizza.model";
import CheesePizza from "../model/cheesePizza.model";
import PepperoniPizza from "../model/pepperoniPizza.model";
class PizzaFactory{
  
    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        
        if(type === "cheese") {
            pizza = new CheesePizza("Cheese Pizza", 5, 500, 2); 
        }
        if(type === "pepperoni") {
            pizza = new PepperoniPizza("Pepperoni Pizza", 6, 600, 4); 
        }
        return pizza;
    }

}

export default PizzaFactory;