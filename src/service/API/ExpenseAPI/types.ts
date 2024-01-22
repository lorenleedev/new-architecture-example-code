import {User} from "../../../domain/user";
import {Expense} from "../../../domain/expense";


export type GetExpenseParams = {
    id:User['id']
}


export type GetExpenseResponse = {
    expenses:Expense[];
}
