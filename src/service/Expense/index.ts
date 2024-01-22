

import {Expense} from "../../domain/expense";
import {User} from "../../domain/user";
import {getExpense} from "../API";



//함수형으로 Expense와 관련된 서비스 기능을 작성
export const extractExpenseId = (expense:Expense) => {
    return expense.id;
}

export const getUserExpenses = async (id:User['id']) => {
    const data =await getExpense({id})

    return data.expenses
}

export const updateExpense = async (id:Expense['id']) =>{
    console.log(`${id}mocked Update Expense`)
}



