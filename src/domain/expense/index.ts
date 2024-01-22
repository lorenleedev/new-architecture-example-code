import {User} from "../user";


export interface Expense {
    id:string;
    name:string;
    price:number;
    owner:User;
}
