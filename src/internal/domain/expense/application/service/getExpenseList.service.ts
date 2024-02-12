import {UsecaseResponse} from "../../../../common/usecase.type.ts";
import GetExpenseListUsecase from "../in/getExpenseList.usecase.ts";
import ExpenseOut from "../../infrastructure/adapter/out/expense.out.ts";
import {GetExpenseUsecaseParams, GetExpenseUsecaseResponse} from "../../infrastructure/type/getExpenseList.type.ts";

// UI와 Server 사이의 비즈니스 로직, service에서는 domain logic을 사용하여 비즈니스 로직을 처리
class GetExpenseListService implements GetExpenseListUsecase {
  private readonly expenseOutAdapter;

  constructor(params: GetExpenseUsecaseParams, expenseOutAdapter: ExpenseOut) {
    this.expenseOutAdapter = expenseOutAdapter;
  }

  execute(): Promise<UsecaseResponse<GetExpenseUsecaseResponse>> {
    // adapter가 외부 API와 통신하여 결과를 가져오고, service에서는 그 결과를 이용해 비즈니스 로직을 작성한 후 반환
    const response  = this.expenseOutAdapter.getExpenseList(params);
    console.log('[3] service');

    return response;
  }
}

export default GetExpenseListService;