import {useSessionService} from "../../service/session/Adapter.ts";
import {useExpenseService} from "../../service/Expense/Adapter.ts";
import {useState} from "react";
import {Expense} from "../../domain/expense";


export const useExampleExpenseApplication = () => {
    const session = useSessionService()
    const expense = useExpenseService()

    const [expenses, setExpenses]=useState<Expense[]>()

    const getExpenseWithUserId = async () => {
        const res =await expense.getUserExpenses(session.getCurrentUser()?.id || '')
        setExpenses(res);
    }


    return {
        expenses,
        getExpenseWithUserId
    }
}
