export class Potter {
    cart: number[] = [];
    
    constructor() {
        // id 0 is useless
        for (let id = 0; id < 6; id++){
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
        let last_sum_cart = this.sum_array(this.cart);
        let cost = last_sum_cart * 8;

        // cloned a cart to avoid modifying this.cart
        let clonecart = Array.from(this.cart);

        for(let iter = 0; iter < 4; iter++){
            // minus each cnt of books by one
            clonecart = (clonecart).map((cnt) => {
                return cnt > 0 ? cnt - 1: cnt;
            });
            let sum_clonecart = this.sum_array(clonecart);
            let cnt_unique = (last_sum_cart - sum_clonecart);
            
            cost -= this.get_discount(cnt_unique);
            last_sum_cart = sum_clonecart
        }       
        return cost;
    }

    private sum_array(my_array: number[]){
        let sum = my_array.reduce((accumulator, current) => {
            return accumulator + current
        });
        return sum;
    }

    private get_discount(unique_cnt_books: number) {
        let discount = 0
        switch (unique_cnt_books){
            case 5:
                discount = 8 * 0.25 * 5;
                break;
            case 4:
                discount = 8 * 0.2 * 4;
                break;
            case 3:
                discount = 8 * 0.1 * 3;
                break;
            case 2:
                discount = 8 * 0.05 * 2;
                break;
            default:
                break;
        }
        return discount;
    }

}
