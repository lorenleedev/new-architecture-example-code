import { UsecaseResponse } from "../../../../../common/usecase.type.ts";
import {
  GetExpenseAPIResponse, GetExpenseUsecaseParams, GetExpenseUsecaseResponse,
} from "../../type/getExpenseList.type.ts";
import { GET_EXPENSES_LIST } from "../../../../../../external/constants/api.ts";
import ApiService from "../../../../../../external/utils/API";

// 역할: outgoing adapter는 외부 API와의 통신을 담당
class ExpenseOutAdapter {
  private readonly apiService: ApiService;

  constructor(apiService: ApiService) {
    // API Service를 주입받음, axios 라이브러이에 대해서는 모름, 디커플링된 상태
    this.apiService = apiService;
  }

  getExpenseList(params: GetExpenseUsecaseParams): Promise<UsecaseResponse<GetExpenseUsecaseResponse>> {
    console.log('[4] outAdapter');
    const result: UsecaseResponse<GetExpenseUsecaseResponse> = {
      http: null,
      success: false,
      message: '',
    };
    // API를 호출하고, 결과를 서비스에 필요한 형태로 가공해 반환
    // 이때 서비스에 필요한 형태로 가공하므로 서비스와 Server간에 디커플링 가능
    return this.apiService.get<GetExpenseAPIResponse>({
      url: `${GET_EXPENSES_LIST}/${params.id}`
    }).then((response) => {
      result.http = response.status;
      result.success = response.status ? true : false; // 더미 코드
      result.message = '성공입니다.'; // 더미 코드
      result.data = { expenses: [{
          id: 1,
          price: 1000,
          title: 'title',
          amount: 1000,
          date: '2021-01-01',
          category: 'category',
          description: 'description',
          currency: 'currency',
          paymentMethod: 'paymentMethod',
          createdAt: '2021-01-01',
          updatedAt: '2021-01-01',
        }]}; // 더미 코드
      return result;
    }).catch((error) => {
      result.http = error.status;
      result.success = error.status ? true : false; // 더미 코드
      result.message = '성공입니다.'; // 더미 코드
      result.data = { expenses: [{
          id: 1,
          price: 1000,
          title: 'title',
          amount: 1000,
          date: '2021-01-01',
          category: 'category',
          description: 'description',
          currency: 'currency',
          paymentMethod: 'paymentMethod',
          createdAt: '2021-01-01',
          updatedAt: '2021-01-01',
        }]}; // 더미 코드
      return result;
    });
  }
}

export default ExpenseOutAdapter;
