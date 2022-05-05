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

    get total_cost() {
        
        let cur_cost = this.sum_array(this.cart) * 8;
        let min_cost = cur_cost;
        let cnt_packs: number[] = new Array(3).fill(0);

        let last_sum_cart = this.sum_array(this.cart);
        let clonecart = Array.from(this.cart);
        let tmp_cnt_packs: number[] = new Array(3).fill(0);
        
        while(1){
            // Find cnt_unique : the number of unque books
            clonecart= this.minus_one_cnt(clonecart, 5);
            let sum_clonecart = this.sum_array(clonecart);
            let cnt_uniq = (last_sum_cart - sum_clonecart);
            if (cnt_uniq >= 3){
                tmp_cnt_packs[cnt_uniq - 3]++;
            }
    
            // discount
            cur_cost -= this.get_discount(cnt_uniq);
            
            // update the cart since a combination of books was retrieved.
            last_sum_cart = sum_clonecart;
            if (sum_clonecart == 0){
                break;
            }
        }
        if(cur_cost < min_cost){
            min_cost = cur_cost;
            cnt_packs = Array.from(tmp_cnt_packs); 
            
        }

        // change (3, 5) to (4, 4)
        min_cost -= Math.min(cnt_packs[0], cnt_packs[2]) * 0.05 * 8;

        return Number(min_cost.toFixed(1));
    }

    private minus_one_cnt(my_array: number[], limit: number){
        let cur_uniq = 0;
        let clonearray = Array.from(my_array);        
        clonearray = (my_array).map((cnt) => {
            return cnt > 0 ? cnt - 1: cnt;
        });
        return clonearray;
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
