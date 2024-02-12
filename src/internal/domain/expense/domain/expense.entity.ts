import {User} from "../../user/domain/user.entity.ts";


export interface Expense {
    id:string;
    name:string;
    price:number;
    owner:User;
}
