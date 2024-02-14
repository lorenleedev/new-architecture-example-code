import {GetExpenseUsecaseParams} from "../../type/getExpenseList.type.ts";
import container from '../../IOCContainer/expense.container';
import ExpenseFactory from '../../DI/expense.factory';

const expenseFactory = container.resolve(ExpenseFactory);

// 역할: service에 접근하기 위한 어댑터
const expenseInAdapter = {
  getExpenseList(params: GetExpenseUsecaseParams) {
    console.log('[1] inAdapter');
    // 팩토리패턴 + inversify를 이용하여 service에 접근
    // 곧바로 service에 접근하지 않는 이유는, service에서 외부와 통신하기 위해서는 outgoing adapter가 필요하기 때문
    // outgoing adapter는 API service가 필요함, 만약 바로 service에 접근한다면 여기서 외부에 있는 API에 의존하게됨
    // 따라서 의존성 방향을 유지하기 위해 outgoing adapter를 주입, 팩토리패턴을 사용
    return expenseFactory.getExpenseListUsecase(params).execute();
  }
}

export default expenseInAdapter;