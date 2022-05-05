export class Potter {
    cart: number[] = [];
    cnt_id = 5; // 5 different versions of book 
    
    constructor() {
        // id 0 is useless
        for (let id = 0; id < (this.cnt_id + 1); id++){
            this.cart[id] = 0;
        }
    }

    add_to_cart(id: number) {
        // index 0 means a null input
        if (id != 0){
            this.cart[id] += 1;
        }
    }

    get total_cost() { 
        let cost = 0;
        for (let id = 1; id < (this.cnt_id + 1); id++){
            cost += this.cart[id] * 8;
        }
        return cost;
    }

}
