import ApiService from "../../../../../external/thirdparty/API";
import GetExpenseListService from "../../application/service/getExpenseList.service";
import {GetExpenseUsecaseParams} from "../type/getExpenseList.type";
import ExpenseOutAdapter from "../adapter/out/expense.out.ts";
import 'reflect-metadata';
import {inject, injectable} from "inversify";

@injectable()
class ExpenseFactory {
  private readonly apiService: ApiService;
  private readonly expenseOutAdapter: ExpenseOutAdapter;

  constructor(@inject(ApiService) apiService: ApiService) {
    this.apiService = apiService;
    this.expenseOutAdapter = new ExpenseOutAdapter(this.apiService);
  }

  getExpenseListUsecase(params: GetExpenseUsecaseParams) {
    // service에 outgoing adapter를 주입
    console.log('[2] factory')
    return new GetExpenseListService(params, this.expenseOutAdapter);
  }
}

export default ExpenseFactory;