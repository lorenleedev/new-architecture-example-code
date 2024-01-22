import {ExpenseService} from "./port";
import {extractExpenseId, getUserExpenses, updateExpense} from "./index.ts";


//훅을 사용해 내보내어야 하는 경우
export const useExpenseService = ():ExpenseService => {

    return {
        getUserExpenses,
        updateExpense,
        extractExpenseId,
    }
}


//일반 함수일 경우
export const getExpenseService = ():ExpenseService => {
    return {
        getUserExpenses,
        updateExpense,
        extractExpenseId,
    }
}
