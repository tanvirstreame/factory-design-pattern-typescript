import { IPizza } from "../interface/pizza.interface";

abstract class Pizza implements IPizza {
    name: string;
    size: number;
    price: number;

    constructor(name: string, size: number, price: number) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

    prepare(): void {
        console.log("prepared");
    }

    bake(): void {
        console.log("baked");
    }

    cut(): void {
        console.log("cut");
    }

    box(): void {
        console.log("boxed");
    }
}

export default Pizza;
