
import {GetExpenseParams, GetExpenseResponse} from "./types.ts";
import {API} from "../index.ts";


export const getExpense = async (params:GetExpenseParams) => {
    const res = await API.get<GetExpenseResponse>('/expense', {params})
    return res.data

}
