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

    get total_cost() { ;
        let cost = (this.cart).reduce((accumulator, current) => {
            return accumulator + current
        });
        cost *= 8;

        let clonecart: number[] = new Array(6).fill(0);
        let last_sum_cart = (this.cart).reduce((accumulator, current) => {
            return accumulator + current
        });
        let iter = 5;
        while(iter--){
            clonecart = (this.cart).map((cnt) => {
                return cnt > 0 ? cnt - 1: cnt;
            });
            const sum_clonecart = clonecart.reduce((accumulator, current) => {
                return accumulator + current
            });
            switch (last_sum_cart - sum_clonecart){
                case 5:
                    cost -= 8 * 0.25 * 5;
                    break;
                case 4:
                    cost -= 8 * 0.2 * 4;
                    break;
                case 3:
                    cost -= 8 * 0.1 * 3;
                    break;
                case 2:
                    cost -= 8 * 0.05 * 2;
                    break;
                default:
                    break;
            }
            last_sum_cart = sum_clonecart
        }       
        return cost;
    }

}
