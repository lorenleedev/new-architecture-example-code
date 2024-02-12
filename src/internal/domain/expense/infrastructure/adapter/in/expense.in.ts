import {GetExpenseUsecaseParams} from "../../type/getExpenseList.type.ts";
import container from '../../IOCContainer/expense.container';
import ExpenseFactory from '../../DI/expense.factory';

const expenseFactory = container.resolve(ExpenseFactory);

// 역할: service에 접근하기 위한 어댑터
const expenseInAdapter = {
  getExpenseList(params: GetExpenseUsecaseParams) {
    console.log('[1] inAdapter');
    // 팩토리패턴 + inversify를 이용하여 service에 접근
    return expenseFactory.getExpenseListUsecase(params).execute();
  }
}

export default expenseInAdapter;